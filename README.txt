LithiumPro POS Web — Realtime Database build
============================================

GitHub Pages files:
- index.html
- logo.jpeg

Firebase helper:
- database.rules.json  (paste into Realtime Database > Rules when instructed)

Configured Firebase project: inventory-app-2cb3a
Super Admin: kadhim.pc.88@gmail.com

IMPORTANT
This build uses Firebase Realtime Database, not Firestore.
The app can read the old /inventory node if /products is empty, so existing inventory data can appear during migration.

For the first live test, keep your current temporary Firebase rules until the admin login and basic operations are verified.
Then replace them with database.rules.json to lock the database to the Super Admin while we complete employee UID-based security.

Employee security note:
A browser-only GitHub Pages app cannot securely enforce an arbitrary pre-approved Gmail list in Realtime Database Rules by email key while also granting per-user permissions, because RTDB Rules need a stable UID/claims mapping. The secure final employee phase should map each approved employee to Firebase Auth UID (or use a backend/custom claims). Do not rely only on hidden UI controls for security.
