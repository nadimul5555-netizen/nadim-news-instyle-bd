export interface CategoryType 
   {
      "slug": string,
      "title": string,
      "topicId": string|null,
      "url": string,
      "scrapable": boolean,
    }

    export interface HeadlineType {
          
      "id": string,
      "title":string,
      "description": string,
      "link": string,
      "imageUrl": string,
      "imageAlt": string,
      "category":string,
      "type": string,
      "isLive": boolean,
      "firstPublished": number,
      "lastPublished":number,
      "source": string,
    
    }
    export interface NirbachitoType 
    {
    "title":string,
      "curationId":string,
      "curationType": string,
      "link": null,
      "count": number,
      "articles": HeadlineType[]
  }
