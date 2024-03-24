import styled, { css } from "styled-components";



const Heading = styled.h1`
${props=> props.as === "h1" && css`

    font-size: 60px;
    font-weight: 600px;
`}
${props=> props.as === "h2" && css`

    font-size: 35px;
    font-weight: 600px;
`}
${props=> props.as === "h3" && css`

    font-size: 20px;
    font-weight: 600px;
`}
${props=> props.as === "h4" && css`

    font-size: 20px;
    font-weight: 600px;
    text-align: :"center";
`}

line-height:6rem;
 
`;


export default Heading