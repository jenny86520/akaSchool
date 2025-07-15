import { Injectable, inject } from "@angular/core";
import {
  doc,
  docData,
  updateDoc,
  Firestore
} from "@angular/fire/firestore";
import { catchError, Observable, throwError } from "rxjs";
import { Visitors } from "../interfaces/system";

@Injectable({ providedIn: "root" })
export class SystemService {
  private firestore: Firestore = inject(Firestore);

  getVisitors(): Observable<Visitors> {
    const ref = doc(this.firestore, "SystemCode/Visitors");
    return docData(ref).pipe(
      catchError((err) => {
        console.error("Error fetching visitors...");
        return throwError(() => err);
      })
    ) as Observable<Visitors>;
  }

  updateVisitors(data: Partial<Visitors>) {
    const ref = doc(this.firestore, "SystemCode/Visitors");
    return updateDoc(ref, data).catch((err) => {
      console.error("Error updating visitors...");
      throw err;
    });
  }
}
