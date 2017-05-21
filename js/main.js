$(document).ready(function() {
  $(".nav a").click(function() {
    link = $(this).attr("href");
  if (window.matchMedia("(min-width: 980px)").matches)
    $.scrollTo(link, 250, {offset: -120});
  else
    $.scrollTo(link, 250, {offset: -20});
  $(".nav-collapse").dropdown('toggle');
    return false;
  })
  $('.has_tooltip').tooltip()
});

var app = angular.module('app', []);
app.controller('ctrl', function($scope){
  $scope.research = [
    {
      title: "Moist adiabats with multiple condensing species: A new theory with application to giant planet atmospheres",
      summary: "",
      journal: {
        name: "Journal of Atmospheric Science"
      },
      image: "img/giant_planet.jpg"
    },
    {
      title: "The distribution of ammonia on Jupiter from a preliminary inversion of Juno Microwave Radiometer data",
      summary: "Jupiter's atmosphere does not look like Earth's. 99% of its atmosphere consists of H2 and He, with the rest being H2O, CH4, NH3, etc. NH3 and H2O form clouds and rain as what happens on Earth. What's the climate of Jupiter? Is it warm and humid like Hawaii or is it hot and arid like Sahara? Read my article, you will be surprised of how Jupiter resembles Earth.",
      journal: {
        name: "Geophysical Research Letters",
        url: "https://doi.org/10.1002/2017GL073159",
        doi: "10.1002/2017GL073159",
        etc: "in press"
      },
      image: "img/juno.jpg",
      submitted: new Date(2017,2-1,10),
      accepted: new Date(2017,5-1,15)
    },
    {
      title: "Moist convection in hydrogen atmospheres and the frequency of Saturn's giant storms",
      summary: "A giant storm erupted on Saturn in December 2010. It was as big as Earth and encircled the planet in six months. Six giant storms—also called Great White Spots—have been observed on Saturn since 1876, recurring every 20 to 30 years and alternating between mid-latitudes and the equator. Who is to blame? We found that the crimial is water, because it is heavier than hydrogen. For years, water is chained by its own weight in the deep atmosphere. But when time comes, it absorbs heat, loses weight and soars all the way to the stratosphere.",
      journal: {
        name: "Nature Geoscience",
        url: "https://doi.org/10.1038/ngeo2405",
        doi: "10.1038/ngeo2405",
        etc: "8(5), 398-403"
      },
      news: [
        {
          name: "Caltech",
          url: "http://www.caltech.edu/news/explaining-saturns-great-white-spots-46500"
        },
        {
          name: "JPL",
          url: "http://www.jpl.nasa.gov/news/news.php?feature=4546"
        },
        {
          name: "CBS",
          url: "http://www.cbsnews.com/news/storms-the-size-of-earth-on-saturn-explained/"
        },
        {
          name: "space.com",
          url: "http://www.space.com/29088-saturn-giant-storms-mystery-solved.html"
        }
      ],
      image: "img/saturn-storm.jpg",
      submitted: new Date(2014,8-1,28),
      accepted: new Date(2015,3-1,6),
      published: new Date(2015,4-1,13)
    },
    {
      title: "Vertical distribution of C3-hydrocarbons in the stratosphere of Titan",
      summary: "Titan is a nature Laboratory for organic chemistry. On Titan, you can find an almost complete family of hydrocarbons except for two errant molecules: allene (CH2CCH2) and cyclopropane (c-C3H6). We predict that the abundance of allene is on the detection limit.",
      journal: {
        name: "Astrophysical Journal Letters",
        url: "https://doi.org/10.1088/2041-8205/803/2/L19",
        doi: "10.1088/2041-8205/803/2/L19",
        etc: "803.2, L19"
      },
      image: "img/allene.png",
      submitted: new Date(2015,1-1,9),
      accepted: new Date(2015,3-1,23),
      published: new Date(2015,4-1,15)
    },
    {
      title: "A non-monotonic eddy diffusivity profile of Titan's atmosphere revealed by Cassini observations",
      summary: "Titan's atmosphere is full of hazes (some dirty stuff floating in the atmosphere). However, at about 500 km, the atmosphere is cleared, creating a gap between two hazy worlds. The layer above it is call 'detached haze layer'. We conjecture that the formation of the detached haze layer is due to an interplay between radiative heating and convective stirring",
      journal: {
        name: "Planetary and Space Science",
        url: "https://doi.org/10.1016/j.pss.2013.10.009",
        doi: "10.1016/j.pss.2013.10.009",
        etc: "104, Part A(0), 48-58"
      },
      image: "img/titan_atm.jpg",
      submitted: new Date(2012,11-1,30),
      accepted: new Date(2013,10-1,23),
      published: new Date(2013,11-1,23)
    }
  ];
  $scope.teaching = [
    {
      name: "Python Workshop",
      code: "Graduate Student Council",
      semester: "Winter 2015",
      role: "Tutor",
      slide: "doc/python_workshop.pdf"
    },
    {
      name: "Planetary Atmosphere",
      code: "Ge 150",
      semester: "Winter 2014",
      role: "TA"
    },
    {
      name: "Earth's Atmosphere",
      code: "ESE 101",
      semester: "Fall 2013",
      role: "TA"
    },
    {
      name: "Earth and Environment",
      code: "Ge 1",
      semester: "Spring 2013",
      role: "TA"
    },
    {
      name: "Linux workshop",
      code: "Graduate Student Council",
      semester: "Fall 2012",
      role: "Tutor"
    }
  ];
  $scope.summaryDisplay = false;
  $scope.toggleSummary = function() {
    $scope.summaryDisplay = !$scope.summaryDisplay;
  };
  $scope.EquationDisplay = false;
  $scope.toggleEquation = function() {
    $scope.EquationDisplay = !$scope.EquationDisplay;
  };
  /*$scope.MovieDisplay = false;
  $scope.toggleMovie = function() {
    $scope.MovieDisplay = !$scope.MovieDisplay;
  };*/
  $scope.featuredTalkDisplay = true;
  $scope.toggleFeaturedTalk = function() {
    $scope.featuredTalkDisplay = !$scope.featuredTalkDisplay;
  };
  $scope.featuredTalkFilter = function(t) {
    return !$scope.featuredTalkDisplay || t.slidesUrl != null || t.publishedUrl != null || t.blogUrl != null
  };
});
