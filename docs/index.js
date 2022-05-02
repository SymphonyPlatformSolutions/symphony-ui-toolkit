const componentsUrl = './packages/components/index.html'
const stylesUrl = './packages/styles/index.html'

const templates = {
  title: 'UI Toolkit -',
  button: 'Switch to',
  styles: 'Styles',
  components: 'Components',
}

const packagesData = [
  {
    // COMPONENTS
    buttonText: `${templates.button} ${templates.styles}`,
    url: componentsUrl,
    pageTitle: `${templates.title} ${templates.components}`,
  },
  {
    // STYLES
    buttonText: `${templates.button} ${templates.components}`,
    url: stylesUrl,
    pageTitle: `${templates.title} ${templates.styles}`,
  },
]

let index = 0

function switchIndex() {
  index = ++index % 2 // alternates between 0 and 1
}

function setPackagesInfo() {
  $(document).prop('title', packagesData[index].pageTitle)
  $('#switch-button').text(packagesData[index].buttonText)
  $('#packages-iframe').attr('src', packagesData[index].url)
}

$(() => {
  $('#switch-button').fadeIn('slow')
  setPackagesInfo()
  $('#switch-button').on({
    click: () => {
      switchIndex()
      setPackagesInfo()
    },
    mouseenter: () => {
      $('#switch-button')
        .stop(true, false)
        .text(packagesData[index].buttonText)
        .animate({ width: '200px' })
    },
    mouseleave: () => {
      $('#switch-button')
        .stop(true, false)
        .text('SWITCH...')
        .animate({ width: '100px' })
    },
  })
})
