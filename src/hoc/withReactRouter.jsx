import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const withReactRouter = (components) => {
    return  (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        const params = useParams();
        const Component = components;
        return (
            <Component
                {...props}
                history={{ push: navigate }}
                location={location}
                match={{params,url:location.pathname}}
            />
        )
    }
}
export default withReactRouter;