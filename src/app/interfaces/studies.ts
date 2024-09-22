export interface StudyItem {
    title: string;
    url: string | null; // Puede ser null en caso de que no haya URL asociada
  }
  
  export interface Studies {
    carreras: StudyItem[];
    cursos: StudyItem[];
  }
  