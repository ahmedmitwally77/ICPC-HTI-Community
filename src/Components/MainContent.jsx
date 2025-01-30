import React from 'react';

const MainContent = () => {
  return (
    <section className="main-content w-full px-6">
      <header className="z-50 bg-[#f7f6f9] sticky top-0 pt-4">
        <div className="flex flex-wrap items-center px-6 py-2 bg-white shadow-md min-h-[56px] rounded-md w-full relative tracking-wide">
          <div className="flex items-center flex-wrap gap-x-8 gap-y-4 z-50 w-full">
            <div className="flex items-center gap-4 py-1 outline-none border-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                className="w-5 cursor-pointer fill-current"
              >
                <path
                  d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
                ></path>
              </svg>
              <input
                type="text"
                placeholder="Search something..."
                className="w-full text-sm bg-transparent rounded outline-none"
              />
            </div>
            <div className="flex items-center gap-8 ml-auto">
              <div className="flex items-center space-x-6">
                {/* Icons and other elements */}
              </div>
              <div className="dropdown-menu relative flex shrink-0 group">
                <img
                  src="https://readymadeui.com/team-1.webp"
                  alt="profile-pic"
                  className="w-9 h-9 rounded-full border-2 border-gray-300 cursor-pointer"
                />
                <div className="dropdown-content hidden group-hover:block shadow-md p-2 bg-white rounded-md absolute top-9 right-0 w-56">
                  {/* Dropdown items */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="my-6 px-2">
        <div className="flex items-start gap-6 flex-wrap">
          {/* Cards and other content */}
        </div>
      </div>
    </section>
  );
};

export default MainContent;