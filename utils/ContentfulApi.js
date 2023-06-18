export default class ContentfulApi {
    static async callContentful(query) {
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  
      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      };
  
      try {
        const data = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json(),
        );
        return data;
      } catch (error) {
        throw new Error("Could not fetch data from Contentful!");
      }
    }

    static async getProducts() {
      const query = `{
        productCollection {
          items {
            image {
              title
              url
            }
            slug  
            name
            description
            num
            cal
            steps
          } 
        }
      }`;
      const response = await this.callContentful(query);
      return response.data.productCollection.items
    }

    static async getProduct(id) {
      console.log(id)
      const query = `{
        productCollection {
          items {
            image {
              title
              url
            }
            slug  
            name
            description
            num
            cal
            steps
          } 
        }
      }`;
      const response = await this.callContentful(query);
      console.log(response.data.productCollection.items)
      return response.data.productCollection.items.find(({slug}) => slug === id)
    }
  }