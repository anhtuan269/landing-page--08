module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    screens: {
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      'acer': '1360px',
      '2xl':'1536px',
      '3xl':'1920px'
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['Open Sans', ],
      'Lato':['Lato','sans-serif']
    },
    boxShadow:{
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'at': ' -1px 2px 2px 4px  rgba(0, 0, 0, 0.15)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
    },
    extend: {
      inset: {
        'n-1':"2px",
        'n-2':"3px",
        'n-3':'6px',
        'n-54':'54px',
        'n-50':'50px',
        'n-60':'62px',
      },
      height: {
        '0.5': "2px",
        'n-1':'1.5px',
        'n-470':'470px',
        'n-420':'420px',
        'n-100':'100px',
        'n-160':'160px',
        'n-200': '200px',
        'n-240': '240px',
        'n-270': '270px',
        'n-350': '350px',
        'n-400':'400px',
        'n-600': '600px',
      },
      dropShadow:{
        'at':'--tw-drop-shadow: drop-shadow(0 2px 2px rgba(0,0,0,0.15));'
      },
      ringOffsetWidth:{
        '2': '2px',
      },
      width: {
        '100':'100px',
        "160":'160px',
        "190":"190px",
        "200":"200px",
        '250':'250px',
        '310': '310px',
        '330': '330px',
        '300':'346.391px',
        '340': '340px',
        '350': '350px',
        '360': '360px',
        '370': '370px',
        '380': '380px',
        '400': '400px',
        '420': '420px',
        '440':'440px',
        '460': '460px',
        '475': '475px',
        '480': '480px',
        '525': '525px',
        '555': '555px',
        '590': '590px',
        '610': '610px',
        '640': '640px',
        '670': '670px',
        '680': '680px',
        '700': '700px',
        '850': '850px',
        '900':"900px",
        "1100":'1110px',
        "1280":'1280px',
        'at':"96%",
        'at-03':"89%",
        'nt':'98%',
        'at-02':"78%"
        
      },
      maxWidth: {
        "400": "400px",
        "330":"330px",
        "350":"350px",
        "380":"380px",
        '460': '460px',
        '610': '610px',
        '1110':'1110px',
        '1260':'1260px',
        '1240':'1240px',
        '1200':'1200px',
        "1280":"1280px",
        "1360":"1360px",
        "1420":"1420px",
        "1400":"1400px",
        "1460":"1460px",
        "1760":"1760px",
        '1800':"1800px",
        '1860':'1860px'

      },
      fontSize: {
        '10':'10px',
        '12': '0.75rem',
        '14': '0.875rem',
        '16': '1rem',
        '17': '17px',
        '18': '1.125rem',
        '20': '1.25rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '25': '1.5625rem',
        '28': '1.75rem',
        '34': '2.125rem',
        '36':'2.25rem',
        '42': '2.625rem',
        '48': '3rem',
        '50': '3.125rem',
        '52': '3.25rem',
        '60': '3.75rem',
        '64': '4rem',
        '74':'4.625rem',
        '80': '5rem',
        '150': '9rem',
        '200': '12.5rem'
      },
      lineHeight:{
        'l-17':'17px',
        'l-20':'20px',
        'l-24':'24px',
        'l-27':'27px',
        'l-30':'30px',
        'l-36':'36px',
        'l-40':'40px',
        'l-44':'44px',
        'l-50':'50px',
        'l-60':'60px',
        'l-80':'80px',
        'l-100':'100px',
        

      },
      zIndex: {
        'a': '-1'
      },
      color: {
        
        "black-01":"#1F2431",
        "blue-01": "#315EFB",
        "gray-01":"#EEEEFF"

      },
      textColor: {
        "black-01":"#1F2431",
        "blue-01": "#315EFB",
        "gray-01":"#EEEEFF",
        "gray-02":"#82899B",
        'pink':'#FF485A',



      },
      backgroundColor: {
        "blue-01": "#315EFB",
        'black-01':'#1F2431',
        "green-01":"#71A894",
        "gray-01":"#EEEEFF",
        
      },
      borderColor: {
        'black-01':'#2F281E',
        "gray-01":"#EEEEFF",
        'blue-01': '#3A5AFF',
        'blue-02':'#3CC5FF',
        "blue-03": "#315EFB",
        "green-01":"#71A894",
        'gray-01':'#979797',
        'white': "#fff",
        'pink':'#FF485A',
        'red-01':'#FF3B53',
        'yellow-01':'#FFC43B'
      },
      borderRadius:{
        "at-06":"6px",
        'at':'55px',
        'at-02':'40px'
      },
      padding: {
        'a':'1px',
        '01': '10px',
        '02': '20px',
        '03': '30px',
        '04': '40px',
        '05': '50px',
        '06': '60px',
        '100': '100px',
        '150': '150px',
        '035': '35px',
        '03': '30px',
        '03': '30px',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
