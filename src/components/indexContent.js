import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';

const IndexContent = () => {

    const query = useStaticQuery(graphql`
    query{
        allDatoCmsPage(filter: {slug: {eq: "index"}}) {
        nodes {
            title
            content
            image {
            fluid {
                ...GatsbyDatoCmsFluid
            }
            }
        }
        }
        }
    `);
    
    console.log(query.allDatoCmsPage.nodes[0]);
    const { title, content, image} = query.allDatoCmsPage.nodes[0];

    return ( 
        <>
            <h2>{title}</h2>
            <div>
                <p>{content}</p>
                <Image fluid={image.fluid}/>
            </div>
        </>
     );
}
 
export default IndexContent;