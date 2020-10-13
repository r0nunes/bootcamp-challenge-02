class Routes { 

    as = { 
        postArticles: 'POSTArticles',
        postUsers: 'POSTUsers',
        postLogin: 'POSTLogin',
        getFeed: 'GETFeed',
        getTags: 'GETTags',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments'        
    }

    init(){
        cy.server();
        cy.route('POST', '**/api/articles' ).as(this.as.postArticles);
        cy.route('POST', '**/api/users').as(this.as.postUsers);
        cy.route('POST', '**/api/users/login').as(this.as.postLogin);
        cy.route('GET', '**/api/tags').as(this.as.getTags);
        cy.route('GET', '**/api/articles/**').as(this.as.getArticlesTitle);
        cy.route('GET', '**/api/articles/**/comments' ).as(this.as.getArticlesTitleComments);
        cy.route('GET', '**/api/articles/feed**').as(this.as.getFeed);
    }
}

export default new Routes();