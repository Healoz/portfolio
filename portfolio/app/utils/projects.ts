import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { Project } from '../types/project';



export async function getProjects(): Promise<Project[]> {
    try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as Project[]
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
}