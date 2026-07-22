export interface IconFile {
  componentName: string;
  fileName: string;
  category: string;
  sourcePath: string;
  outputPath: string;
}

export interface ComponentOptions {
  icon: IconFile;
  jsx: string;
}