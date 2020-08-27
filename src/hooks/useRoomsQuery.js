import { graphql, useStaticQuery } from 'gatsby';

const useRoomQuery = () => {

    const data = useStaticQuery( graphql`
        query {
            allDatoCmsRoom {
            nodes {
                title
                id
                slug
                description
                image {
                fluid(maxWidth:1200) {
                    ...GatsbyDatoCmsFluid
                }
                }
            }
            }
        }
    `)

}
 
export default useRoomQuery;