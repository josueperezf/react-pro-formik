import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, DynamicForm } from '../03-forms/pages';
import logo from '../logo.svg';
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';

const Navigation = () => {
    /**
     * Link es como un ancla normarl <a>
     * NavLink hace lo mismo que Link pero nos da informacion si estamos en la url dependiendo del path del link para clases css
     * 
     * <Route path="/*" element={<Navigate to='home' replace /> } />
     * nos permite de que si trata de navegar a una pagina que no existe, lo lleva al home, 
     * pero al mismo tiempo evita que al darle atras, lo redireccione a la pagina erronea que por url intento llegar
     * ejemplo /kajsdlkhjasd, lo llevara al /home
     */
  return (
      <>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt='React logo' />
                    <ul>
                        <li>
                            <NavLink to='/register' className={({isActive}) => "" + (isActive ? "nav-active" : "")} >Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-basic' className={({isActive}) => "" + (isActive ? "nav-active" : "")}>formik basic</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-yup' className={({isActive}) => "" + (isActive ? "nav-active" : "")}>Formik con Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-components' className={({isActive}) => "" + (isActive ? "nav-active" : "")}>formik components</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-abstraction' className={({isActive}) => "" + (isActive ? "nav-active" : "")}>formik abstraccion</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register-formik-page' className={({isActive}) => "" + (isActive ? "nav-active" : "")}>register formik page dinamic</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dynamic-form' className={({isActive}) => "" + (isActive ? "nav-active" : "")}>dynamic form</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/register" element={<RegisterPage /> } />
                    <Route path="/formik-basic" element={<FormikBasicPage /> } />
                    <Route path="/formik-yup" element={<FormikYupPage /> } />
                    <Route path="/formik-components" element={<FormikComponents /> } />
                    <Route path="/formik-abstraction" element={<FormikAbstraction /> } />
                    <Route path="/register-formik-page" element={<RegisterFormikPage /> } />
                    <Route path="/dynamic-form" element={<DynamicForm /> } />
                    <Route path="/*" element={<Navigate to='register' replace /> } />
                </Routes>
            </div>
        </BrowserRouter>
      </>
  )
};

export default Navigation;
