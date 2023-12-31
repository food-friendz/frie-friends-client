import { Link, useNavigate } from "react-router-dom";
import { AppBar, Button, Stack, Box } from "@mui/material";
import "./Header.css";
import { WithAuth, WithoutAuth } from "../WithAuths";
import { useAuth } from "../../utils/contex";

function Header() {
  const auth = useAuth();
  const navigate = useNavigate();
  
  const doSignout = (/** @type {Event} */ event) => {
    event.preventDefault()
    auth.logout(() => {
      navigate("/login");
    });
  };

  // return (
  //   <>
  //     <div className="relative bg-teal-700">
  //       <div className="absolute inset-0">
  //         <img
  //           className="w-full h-full object-cover object-center"
  //           src="https://cdn.choosechicago.com/uploads/2019/06/AA_TASTE_04-900x605.jpeg"
  //           alt=""
  //         />
  //         <div className="absolute inset-0" aria-hidden="true" />
  //       </div>
  //       <div className="relative text-center max-w-7xl mx-auto py-24 px-4 flex flex-col items-center sm:py-32 sm:px-6 lg:px-8">
  //         <h1 className="header text-4xl font-extrabold tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
  //           Foodie Friends
  //         </h1>
  //         <p className="about-blurb mt-6 text-xl font-medium xl:text-2xl text-stone-50 max-w-3xl">
  //           Welcome
  //         </p>
  //       </div>
  //       <h1>Foodie Friends</h1>
  //     </div>
  //   </>
  // );
  return (
    <>
      <AppBar>
        <Stack className="nav-container" direction="row">
          <Button>
            <Link>
              <img src="logo.png" alt="Logo" className="w-16 h-16 mr-4" />
              <span className="text-gray-800 text-xl">My Website</span>
            </Link>
          </Button>

          <Box m="auto"></Box>

          <div className="flex items-center justify-end">
            <WithoutAuth>
              <Button>
                <Link to="/login" className="text-gray-800 text-sm mr-4">
                  Log in
                </Link>
              </Button>
              <Button>
                <Link to="/signup" className="text-gray-800 text-sm">
                  sign up
                </Link>
              </Button>
            </WithoutAuth>
            <WithAuth>
              <Button>
                <Link onClick={doSignout} className="text-gray-800 text-sm">
                  sign out
                </Link>
              </Button>
            </WithAuth>
          </div>
        </Stack>
      </AppBar>
    </>
  );
}

//
//

// BELOW IS PREV CODE
// Link buttons can be leveraged once the pages for event, sign up, login, etc are mades

//
//
//

// import React from 'react';

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
//     <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
//       <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
//         <Link className="text-dark" to="/">
//           <h1 className="m-0" style={{ fontSize: "3rem" }}>
//             Tech Friends
//           </h1>
//         </Link>
//         <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
//           Meet your new programming pals.
//         </p>
//         <div>
//           {Auth.loggedIn() ? (
//             <>
//               <Link className="btn btn-lg btn-primary m-2" to="/me">
//                 View My Profile
//               </Link>
//               <button className="btn btn-lg btn-light m-2" onClick={logout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-lg btn-primary m-2" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-lg btn-light m-2" to="/signup">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

export default Header;
