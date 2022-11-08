import styled from "styled-components";

const ResponsiveContainer = styled.div`
    margin: 0;
  
    @media screen and (min-width: 700px) {
        margin: 0 100px;
        width: calc(100% - 200px);
    }
`;

export default ResponsiveContainer;