import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const withReactRouter=(Component) => {
    return  (props) => {
        const navigate = useNavigate();
        const location = useLocation();
        const params = useParams();
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