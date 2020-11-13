const columns = document.createElement('div')
columns.className = 'columns';

    const column = document.createElement('div')
    column.className = 'column';

        const card = document.createElement('div')
        card.className = 'card';

            const card_image = document.createElement('div')
            card_image.className = 'card-image';

                const image = document.createElement('figure')
                image.className = 'image is-4by3';

                const img = document.createElement('img')
    
        const card_content = document.createElement('div');
        card_content.className= 'card-content';

            const tag = document.createElement('span');
            tag.className= 'tag is-success';
            tag.textContent= element.category;

            const media = document.createElement('div')
            media.className = 'media'

                const media_content = document.createElement('div')
                media_content.className= 'media-content'

                    const title = document.createElement('p')
                    title.className = 'title is-4'
                    title.textContent = element.title;

                        const link = document.createElement('a')
                        link.textContent = element.link;

                            const icon_yt = document.createElement('i')
                            icon_yt.className = 'fab fa-youtube fa-1x'
                    
                    const subtitle = document.createElement('p')
                    subtitle.className = 'subtitle is-6'
                    subtitle.textContent = element.author;
            
            const content = document.createElement('div')
            content.className = 'content'
            content.textContent = element.description;