const fs = require('fs');
let code = fs.readFileSync('game_v2', 'utf-8');

// Update arrow geometry and position
code = code.replace(/const arrowGeo = new THREE\.PlaneGeometry\(1500, 5500\);/, "const arrowGeo = new THREE.PlaneGeometry(1500, 8000);");
code = code.replace(/projectedArrow\.position\.set\(0, 5, -23250\);/, "projectedArrow.position.set(0, 5, -22000);"); // Center -22000, Length 8000 -> from -18000 to -26000

fs.writeFileSync('game_v2', code);
