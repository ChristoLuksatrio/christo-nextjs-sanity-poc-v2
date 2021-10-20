export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61706fdca57ce60b2a6e97da',
                  title: 'Sanity Studio',
                  name: 'christo-nextjs-sanity-poc-v-2-studio',
                  apiId: 'f07a2ba0-d191-4c12-8206-1fb32d861713'
                },
                {
                  buildHookId: '61706fdc308ed30cee1f09a0',
                  title: 'Landing pages Website',
                  name: 'christo-nextjs-sanity-poc-v-2',
                  apiId: 'f24ef76a-0655-49bb-b066-bddf9d6cc0c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChristoLuksatrio/christo-nextjs-sanity-poc-v2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://christo-nextjs-sanity-poc-v-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
