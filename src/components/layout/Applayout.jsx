@@ .. @@
 import Headers from "../ui/Headers";  
 
 import Footers  from "../ui/Footers"; 
 
 import {Outlet} from "react-router-dom";
 
 
 export const Applayout =()=>{
     return (
-    <>
+    <div style={{ 
+      minHeight: '100vh', 
+      display: 'flex', 
+      flexDirection: 'column',
+      width: '100%',
+      overflow: 'hidden'
+    }}>
    
-    <Headers/>|
-     <Outlet />
+    <Headers/>
+     <main style={{ flex: 1, width: '100%' }}>
+       <Outlet />
+     </main>
     <Footers/>
-    </>
+    </div>
     );
 };