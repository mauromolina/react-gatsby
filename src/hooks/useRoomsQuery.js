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

    return data.allDatoCmsRoom.nodes.map( room => ({
        title: room.title,
        id: room.id,
        description: room.description,
        slug: room.slug,
        image: room.image,

    }))

}
 
export default useRoomQuery;