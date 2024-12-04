import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../featchers/themeSlice";

const Navigation = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <>
      <div
        className={`${
          theme === "dark" ? "bg-dark" : "bg-light"
        } w-100 shadow-lg`}
      >
        <Container>
          <div className="d-flex w-100 py-2 mb-5 justify-content-between align-items-center">
            <h3>Nassim Postman</h3>
            <div>
              {theme === "dark" ? (
                <div
                  className="bg-transparent border p-2 rounded border-light text-light"
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(toggleTheme())}
                >
                  <i className="bi bi-brightness-high-fill"></i>
                </div>
              ) : (
                <div
                  className="bg-transparent border p-2 rounded border-dark text-dark"
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(toggleTheme())}
                >
                  <i className="bi bi-moon"></i>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navigation;
