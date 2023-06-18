export default class ContentfulApi {
    static async callContentful(query) {
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;
      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
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
      return response.data.productCollection.items.find(({slug}) => slug === id)
    }

    static async getModulesController() {
      const query = `{
        modulesConfigCollection {
          items {
            config
          }
        }
      }`;
      const response = await this.callContentful(query);
      return response.data.modulesConfigCollection.items[0].config
    }
  }