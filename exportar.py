import os

def exportar_proyecto_react(
    ruta_proyecto=".",
    archivo_salida="proyecto_react.txt",
    incluir_arbol=True
):
    # Carpetas que SIEMPRE se ignoran en React
    ignorar_carpetas = {
        'node_modules', '.git', 'build', 'dist', '.next', 'out',
        'coverage', '__pycache__', '.vscode', '.idea', '.cache',
        'venv', '.venv', 'public/assets', '.parcel-cache'
    }
    
    # Extensiones relevantes de un proyecto React
    extensiones = {
        '.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs',
        '.css', '.scss', '.sass', '.less',
        '.html', '.json', '.md', '.txt', '.env',
        '.svg'  # a veces es útil verlos (texto)
    }
    
    # Archivos específicos a ignorar
    ignorar_archivos = {
        'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
        '.DS_Store', 'Thumbs.db', '.eslintcache'
    }
    
    archivos_exportados = 0
    
    with open(archivo_salida, 'w', encoding='utf-8') as salida:
        # Encabezado
        salida.write("=" * 80 + "\n")
        salida.write("EXPORTACIÓN DE PROYECTO REACT\n")
        salida.write("=" * 80 + "\n\n")
        
        # ===== ÁRBOL DE ESTRUCTURA =====
        if incluir_arbol:
            salida.write("ESTRUCTURA DE CARPETAS\n")
            salida.write("-" * 80 + "\n")
            for raiz, dirs, archivos in os.walk(ruta_proyecto):
                dirs[:] = [d for d in dirs if d not in ignorar_carpetas 
                           and not d.startswith('.')]
                
                nivel = raiz.replace(ruta_proyecto, '').count(os.sep)
                if nivel == 0:
                    indent = ''
                else:
                    indent = '│   ' * (nivel - 1) + '├── '
                
                nombre = os.path.basename(raiz) if nivel > 0 else 'proyecto/'
                salida.write(f"{indent}📁 {nombre}\n")
                
                for archivo in sorted(archivos):
                    if archivo in ignorar_archivos:
                        continue
                    ext = os.path.splitext(archivo)[1].lower()
                    if ext in extensiones:
                        sub_indent = '│   ' * nivel + '├── '
                        salida.write(f"{sub_indent}📄 {archivo}\n")
            
            salida.write("\n\n")
        
        # ===== CONTENIDO DE ARCHIVOS =====
        salida.write("=" * 80 + "\n")
        salida.write("CONTENIDO DE ARCHIVOS\n")
        salida.write("=" * 80 + "\n\n")
        
        for raiz, dirs, archivos in os.walk(ruta_proyecto):
            # Filtrar carpetas ignoradas (incluyendo las que empiezan con .)
            dirs[:] = [d for d in dirs if d not in ignorar_carpetas 
                       and not d.startswith('.')]
            
            for archivo in sorted(archivos):
                if archivo in ignorar_archivos:
                    continue
                
                ext = os.path.splitext(archivo)[1].lower()
                if ext not in extensiones:
                    continue
                
                ruta_completa = os.path.join(raiz, archivo)
                ruta_relativa = os.path.relpath(ruta_completa, ruta_proyecto)
                
                try:
                    with open(ruta_completa, 'r', encoding='utf-8') as f:
                        contenido = f.read()
                except (UnicodeDecodeError, PermissionError):
                    continue
                
                salida.write("\n" + "=" * 80 + "\n")
                salida.write(f"📄 ARCHIVO: {ruta_relativa}\n")
                salida.write("=" * 80 + "\n")
                salida.write(contenido)
                salida.write("\n")
                
                archivos_exportados += 1
    
    print(f"✅ Exportados {archivos_exportados} archivos")
    print(f"📄 Archivo generado: {archivo_salida}")

    # Tamaño del archivo resultante
    tamaño = os.path.getsize(archivo_salida)
    if tamaño > 1024 * 1024:
        print(f"⚠️  Tamaño: {tamaño / (1024*1024):.2f} MB")
    else:
        print(f"📦 Tamaño: {tamaño / 1024:.1f} KB")


if __name__ == "__main__":
    exportar_proyecto_react()