import React from 'react';
import { createServer, Factory, Model} from 'miragejs';
import { faker } from '@faker-js/faker';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models:{
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i:number){
          return `User ${i+1}`
        },
        email(){
          return faker.internet.email().toLowerCase();
        },
        createdAt(){
          return faker.date.recent(10); 
        }
      })
    },

    seeds(server){
      server.createList('user', 200)
    },

    routes(){
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users', function(schema, request) {
        const {page = 1 , per_page=10} = request.queryParams;

        const total = schema.all('user').length;

        //Pagination math
        const pageStart= (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        //return an object with and array of users -> users slice on page start until the page end
        const users = schema.all('user').users.slice(pageStart, pageEnd);
      });
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }
  })

 return server;
}
