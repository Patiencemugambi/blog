

import React from 'react';

function NavBar() {
    return (
      <div>
        <nav style={{ backgroundColor: 'blue', padding: '10px', display: 'flex', justifyContent: 'flex-end' }}>
          <ul style={{ listStyleType: 'none', display: 'flex', fontSize:'25px' }}>
            <li style={{ marginRight: '10px', color: 'white' }}>About Us</li>
            <li style={{ marginRight: '10px', color: 'white' }}>Home</li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default NavBar;


// import React from 'react';

// function NavBar() {
//   return (
//     <div>
//       <nav style={{ backgroundColor: 'blue', padding: '10px' }}>
//         <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'flex-end' }}>
//           <li style={{ margin: '0 10px' }}>
//             <a href="#" style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>About Us</a>
//           </li>
//           <li style={{ margin: '0 10px' }}>
//             <a href="#" style={{ color: 'white', fontSize: '20px', textDecoration: 'none' }}>Home</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default NavBar;

  