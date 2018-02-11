class ApiService {
   /**
     * define base url and field schemas here
     * @returns {ApiService}
     */
    constructor() {
      this.apiUrl = 'http://localhost:3001/graphql';
      this.placeFields = `{_id, name, latitude, longitude}`;
    }
   /**
     * Generic function to fetch data from server
     * @param {string} query
     * @returns {unresolved}
     */
    async getGraphQlData(resource, params, fields) {
      // const query = `{${resource} ${this.paramsToString(params)} ${fields}}`;
      const query = `{${resource} ${fields}}`
      // console.log(query);
      const res = await fetch(this.apiUrl, {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
        body: JSON.stringify({query}),
      });
      if (res.ok) {
        const body = await res.json();
        return body.data;
      } else {
        throw new Error(res.status);
      }
    }
   /**
     *
     * @param {object} params
     * @returns {array} places list or empty list
     */
    async getPlaces(params = {}) {
        const data = await this.getGraphQlData(
            'places', params, this.placeFields
        );
        //return places list
        console.log(data);
        return data.places;
    }


    /**
      * Generic function to fetch data from server
      * @param {string} query
      * @returns {unresolved}
      */
     async addGraphQlData(resource, params, fields) {
       const query = `mutation {${resource} ${this.paramsToString(params)} ${fields}}`;
       console.log(query);
       const res = await fetch(this.apiUrl, {
         method: 'POST',
         mode: 'cors',
         headers: new Headers({
             'Content-Type': 'application/json',
             'Accept': 'application/json',
         }),
         body: JSON.stringify({query}),
       });
       if (res.ok) {
         const body = await res.json();
         return body.data;
       } else {
         throw new Error(res.status);
       }
     }
    /**
      *
      * @param {object} params
      * @returns {array} places list or empty list
      */
     async addPlaces(params = {}) {
         const data = await this.addGraphQlData(
             'places', params, this.placeFields
         );
         //return places list
         // console.log(data);
         return data.places;
     }
   /**
     *
     * @param {object} params
     * @returns {String} params
      converted to string for usage in graphQL
     */
    paramsToString(params) {
        let paramString = '';
        if (params.constructor === Object && Object.keys(params).length) {
            let tmp = [];
            for (let key in params) {
                let paramStr = params[key];
                if(paramStr !== '') {
                    if (typeof params[key] === 'string') {
                        paramStr = `"${paramStr}"`;
                    }
                    tmp.push(`${key}:${paramStr}`);
                }
            }
            if (tmp.length) {
                paramString = `(${tmp.join()})`;
            }
        }
        return paramString;
    }
}
export default new ApiService();
