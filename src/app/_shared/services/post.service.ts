import { Injectable, inject } from "@angular/core";
import {
  Firestore,
  collection,
  doc,
  docData,
  collectionSnapshots
} from "@angular/fire/firestore";
import { catchError, map, Observable, throwError } from "rxjs";
import { Post, Reference, Update } from "../interfaces/post";

@Injectable({ providedIn: "root" })
export class PostService {
  private firestore: Firestore = inject(Firestore);

  getPosts(): Observable<(Post & { id: string })[]> {
    const postCollection = collection(this.firestore, "Post");
    return collectionSnapshots(postCollection).pipe(
      map((snapshots) =>
        snapshots.map((snapshot) => {
          const data = snapshot.data() as Post;
          const id = snapshot.id;
          delete (data as any).Content;
          return { id, ...data };
        })
      ),
      catchError((err) => {
        console.error("Error fetching all posts...");
        return throwError(() => err);
      })
    );
  }

  getPost(postNumber: string): Observable<Post | undefined> {
    const postDoc = doc(this.firestore, "Post", postNumber || "0");
    return docData(postDoc).pipe(
      catchError((err) => {
        console.error("Error fetching post...");
        return throwError(() => err);
      })
    ) as Observable<Post>;
  }

  getUpdateCollection(postNumber: string): Observable<Update[]> {
    const updatesRef = collection(
      this.firestore,
      "Post",
      postNumber || "0",
      "UpdateCollection"
    );
    return collectionSnapshots(updatesRef).pipe(
      map((snapshots) =>
        snapshots.map((snapshot) => snapshot.data() as Update)
      ),
      catchError((err) => {
        console.error("Error fetching update collection...");
        return throwError(() => err);
      })
    );
  }

  getReferenceCollection(postNumber: string): Observable<Reference[]> {
    const refsRef = collection(
      this.firestore,
      "Post",
      postNumber || "0",
      "ReferenceCollection"
    );
    return collectionSnapshots(refsRef).pipe(
      map((snapshots) =>
        snapshots.map((snapshot) => snapshot.data() as Reference)
      ),
      catchError((err) => {
        console.error("Error fetching reference collection...");
        return throwError(() => err);
      })
    );
  }
}
