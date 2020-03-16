import styled from '@emotion/styled'
import mediaQueries from '../../global/mediaQueries'


const GridHome = styled("section")` 
    display: grid;
    grid-template-columns: 1fr 1fr;



    ${mediaQueries.mobile}{
        grid-template-columns: 1fr;
        grid-row-gap: 40px;

    }

    h1{
            font-size: 30px;
        }
        h2{padding: 40px 0; font-size: 40px;}

        p{
        font-size: 24px;
    line-height: 1.4;
    margin-bottom: 20px;
    }
`

export { GridHome }