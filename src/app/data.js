const data = [
{
  id: 1,
  name: "Mission Chinese Food",
  address : "171 E Broadway, New York, NY 10002",
  number : "416-186-8031",
  desc : "Cheap yet delicious chinese cuisine. Check our menu for our daily specials and weekly deals!",
  neighborhood: "Manhattan",
  photo: "https://d2l4kn3pfhqw69.cloudfront.net/wp-content/uploads/2021/10/24preview_MIMIchinese_Gabriel_Li_GL1264_DiningRoom-1024x577.png",
  latlng: {
    lat: 40.713829,
    lng: -73.989667
  },
  cuisine_type: "Asian",
  operating_hours: {
    Monday: "5:30 pm - 11:00 pm", 
    Tuesday: "5:30 pm - 12:00 am",
    Wednesday: "5:30 pm - 12:00 am",
    Thursday: "5:30 pm - 12:00 am",
    Friday: "5:30 pm - 12:00 am",
    Saturday: "12:00 pm - 4:00 pm, 5:30 pm - 12:00 am",
    Sunday: "12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm"
  },
  review1: {
    name: "Steve",
    date: "October 26, 2016",
    rating: 4,
    comments: "Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits — the kung pao pastrami, the thrice cooked bacon —but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank."
  },
  review2: {
    name: "Morgan",
    date: "October 26, 2016",
    rating: 4,
    comments: "This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!"
  },
  review3: {
    name: "Jason",
    date: "October 26, 2016",
    rating: 3,
    comments: "I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff."
  }

},
{
  id: 2,
  name: "Toronto Burger & Pizza",
  address : "11 Dufferin, Toronto, ON M6D 4E6",
  number : "416-666-7770",
  desc : "Making Burgers that are from heaven itself! Our goal is to ensure that burgers are made to perfection.",
  neighborhood: "Manhattan",
  photo: "https://media-cdn.tripadvisor.com/media/photo-s/02/c8/2e/6f/pizza-place.jpg",
  latlng: {
    lat: 40.713829,
    lng: -73.989667
  },
  cuisine_type: "Asian",
  operating_hours: {
    Monday: "5:30 pm - 11:00 pm",
    Tuesday: "5:30 pm - 12:00 am",
    Wednesday: "5:30 pm - 12:00 am",
    Thursday: "5:30 pm - 12:00 am",
    Friday: "5:30 pm - 12:00 am",
    Saturday: "12:00 pm - 4:00 pm, 5:30 pm - 12:00 am",
    Sunday: "12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm"
  },
  review1: {
    name: "Steph",
    date: "October 26, 2016",
    rating: 4,
    comments: "Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long."
  },
  review2: {
    name: "Steve",
    date: "October 26, 2016",
    rating: 4,
    comments: "This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city."
  },
  review3: {
    name: "Sam",
    date: "October 26, 2016",
    rating: 5,
    comments: "5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."
  }
},
{
  id: 3,
  name: "Kang Ho Dong Baekjeong",
  address : "3759 Adelaide St, Toronto, ON M5H 1P6",
  number : "416-862-9546",
  desc : "Cheap food, good taste. Come to Kang Ho Dong for good price and good food, thank you.",
  neighborhood: "Toronto",
  photo: "https://images.dailyhive.com/20211019133148/Screen-Shot-2021-10-19-at-4.30.24-PM.png",
  latlng: {
    lat: 40.747143,
    lng: -73.985414
  },
  cuisine_type: "Japanese",
  operating_hours: {
    Monday: "11:30 am - 2:00 am",
    Tuesday: "11:30 am - 2:00 am",
    Wednesday: "11:30 am - 2:00 am",
    Thursday: "11:30 am - 2:00 am",
    Friday: "11:30 am - 6:00 am",
    Saturday: "11:30 am - 6:00 am",
    Sunday: "11:30 am - 2:00 am"
  },
  review1: {
    name: "Steph",
    date: "October 26, 2020",
    rating: 5,
    comments: "The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong’s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it’s available, make sure to order the kimchi and rice “lunchbox.” Baekjeong is a great place for large groups and birthday parties."
  },
  review2: {
    name: "Steve",
    date: "October 26, 2019",
    rating: 4,
    comments: "I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "
  },
  review3: {
    name: "Sam",
    date: "October 26, 2016",
    rating: 1,
    comments: "MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"
  }
},
{
  id: 4,
  name: "Katz's Delicatessen",
  address : "3079 Tycos Dr, ON M5T 1T4",
  number : "416-948-2046",
  desc : "No-frills deli with theatrically cranky service serving mile-high sandwiches since 1888.",
  neighborhood: "Toronto",
  photo: "https://cdn.foodism.to/gallery_small/5f91abde942ad.jpeg",
  latlng: {
    lat: 40.722216,
    lng: -73.987501
  },
  cuisine_type: "American",
  operating_hours: {
    Monday: "8:00 am - 10:30 pm",
    Tuesday: "8:00 am - 10:30 pm",
    Wednesday: "8:00 am - 10:30 pm",
    Thursday: "8:00 am - 2:30 am",
    Friday: "8:00 am - Sat",
    Saturday: "Open 24 hours",
    Sunday: "Sat - 10:30 pm"
  },
  review1: {
    name: "Steph",
    date: "October 30, 2021",
    rating: 5,
    comments: "In 127 years, little has changed at Katz's. It remains one of New York's — and the country's — essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer — your sandwich will be better for it."
  },
  review2: {
    name: "Steve",
    date: "November 3, 2019",
    rating: 5,
    comments: "If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!"
  },
  review3: {
    name: "Sam",
    date: "April 9, 2020",
    rating: 2,
    comments: "Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."
  }
},
{
  id: 5,
  name: "Roberta's Pizza",
  address : "3254 Victoria Park Ave, ON M4A 2M5",
  number : " 416-612-1899",
  desc : "Counter in a bustling Urbanspace food hall turning out artisan wood-fired pies, plus draft beer.",
  neighborhood: "Toronto",
  photo: "https://i.ytimg.com/vi/07zi3Moseu8/maxresdefault.jpg",
  latlng: {
    lat: 40.722216,
    lng: -73.987501
  },
  cuisine_type: "Italian",
  operating_hours: {
    Monday: "11:00 am - 12:00 am",
    Tuesday: "11:00 am - 12:00 am",
    Wednesday: "11:00 am - 12:00 am",
    Thursday: "11:00 am - 12:00 am",
    Friday: "11:00 am - 12:00 am",
    Saturday: "10:00 am - 12:00 am",
    Sunday: "10:00 am - 12:00 am"
  },
  review1: {
    name: "Robby",
    date: "October 5, 2021",
    rating: 5,
    comments: "Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."
  },
  review2: {
    name: "Ashely",
    date: "April 1, 2020",
    rating: 5,
    comments: "Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."
  },
  review3: {
    name: "Yara",
    date: "July 14, 2020",
    rating: 2,
    comments: "The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"
  }
},


]
export default data;