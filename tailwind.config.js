module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      opacity:{
        "customOpacity":0.05
      },
      container:{
        center:true
      },
      colors: {
      lightBlue:"#7dc480",
      sky:"#4CAF50",
      },
      fontSize:{
        "h1_custom":"25px"
      },
      // backgroundImage:{

      // }
    }
  },
  plugins: [],
}