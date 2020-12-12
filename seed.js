

var seeder = require('mongoose-seed');
const Categories = require('./models/Categories');
const News = require('./models/News');
const Config = require('./config')
// Connect to MongoDB via Mongoose
const db = Config.db
console.log(db)

seeder.connect(db,{useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true},function() {
 
    // Load Mongoose models
    seeder.loadModels([
    'models/Categories.js',
    'models/News.js'
    ]);
 
    // Clear specified collections
    seeder.clearModels(['Categories'], async function() {
        //insert
        await Categories.insertMany(categoryDocs);
    });
    // Clear specified collections
    seeder.clearModels(['News'], async function() {
        //get all Ids of categoriesDOcs
        const catIds = await Categories.find({},{_id:1,slug:1});
        console.log(catIds);
        var chunk = 6;
        var temparray;
        // for (let index = 0; index < newsDocs.length; index++) {
        for (let index = 0; index < newsDocs.length; index+=chunk) {
            temparray = newsDocs.slice(index,index+chunk);
            for (let i = 0; i < temparray.length; i++) {
                var newsDoc = temparray[i];
                newsDoc['categoryId'] = catIds[i]['_id']
                // newsDoc['categoryname'] = catIds[i]['slug']
                await News.create(newsDoc)
            }
        }
        console.log('News Inserted with Category mapping')
        seeder.disconnect();
    });
});

// Data array containing seed data - documents organized by Model
var categoryDocs = [
    {
        name: "Healthcare",
        slug: "healthcare",
        content: "Dummy text Healthcare",
        imgUrl: "https://img.ibc24.in/storage/news/15831695771528654285-9239.jpg"
    },
    {
        name: "Religion",
        slug: "religion",
        content: "Dummy text religion",
        imgUrl: "https://img.ibc24.in/storage/news/15831695771528654285-9239.jpg"
    },
    {
        name: "Sports",
        slug: "sports",
        content: "Dummy text",
        imgUrl: "https://img.ibc24.in/storage/news/15831695771528654285-9239.jpg"
    },
    {
        name: "Business",
        slug: "business",
        content: "Dummy text business",
        imgUrl: "https://img.ibc24.in/storage/news/15831695771528654285-9239.jpg"
    },
    {
        name: "Entertainment",
        slug: "entertainment",
        content: "Dummy text एंटरटे",
        imgUrl: "https://img.ibc24.in/storage/news/15831695771528654285-9239.jpg"
    },
    {
        name: "Crime",
        slug: "crime",
        content: "Dummy text Crime",
        imgUrl: "https://img.ibc24.in/storage/news/15831695771528654285-9239.jpg"
    }
]
var newsDocs = [
    {
      name: "CM Baghel salutes the heroic martyr Narayan Singh on Martyrdom Day",
      slug: "cm-baghel-salutes-the-heroic-martyr-narayan-singh-on-martyrdom-day",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      thumbImgUrl: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
      fullImgUrl: "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"
    },
    {
      name: "Franklin Tempalton case: Court asks SEBI to appoint supervisor for e-voting",
      slug: "Franklin-Tempalton-case:-Court-asks-SEBI-to-appoint-supervisor-for-e-voting-116286",
      description: "Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability.",
      thumbImgUrl: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
      fullImgUrl: "https://homepages.cae.wisc.edu/~ece533/images/cat.png"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/1607522794KJS.webp",
      description: "Fusce lorem The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested varius",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/1607522794KJS.webp",
      slug: "Income_tax_raid_on_the_house_of_Pawan_Ahluwalia_the_operator_of_KJS_Cement_Factory",
      name: "Income tax raid on the house of Pawan Ahluwalia, the operator of KJS Cement Factory"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/1607522201u0917.webp",
      description: "Class proin.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/1607522201u0917.webp",
      slug: "High_voltage_uproar_in_collectorate_premises_during_love_marriage____Father_beat_his_own_son",
      name: "High voltage uproar in collectorate premises during love marriage    Father beat his own son"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/1607520425u0942u093976767676.webp",
      description: "Netus metus suspendisse.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/1607520425u0942u093976767676.webp",
      slug: "Constable_demands_salary_increase___Legislators_-_MPs_got_support_____See_what_the_Home_Minister_Tamradhwaj_Sahu_said",
      name: "Constable demands salary increase   Legislators - MPs got support     See what the Home Minister Tamradhwaj Sahu said"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/1607520245COCIN.webp",
      description: "Proin massa mauris ut cursus consectetuer.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/1607520245COCIN.webp",
      slug: "#_IBC24AgainstDrugs:_Police_Succeed_in_Cocaine_Case",
      name: "# IBC24AgainstDrugs: Police Succeed in Cocaine Case"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/1607521755gautam-adani.webp",
      description: "Massa vitae mus dolor netus.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/1607521755gautam-adani.webp",
      slug: "India_to_generate_cheapest_electricity_from_renewable_energy_sources:_Gautam_Adani",
      name: "India to generate cheapest electricity from renewable energy sources: Gautam Adani"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/1607519084kisan-andolan.webp",
      description: "Class proin nisi a dolor laoreet venenatis et libero.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/1607519084kisan-andolan.webp",
      slug: "Farmers'_protest_movement:_Miles_away_from_home_but_elderly_farmers_have_the_firm_intention_to_continue_fighting",
      name: "Farmers' protest movement: Miles away from home, but elderly farmers have the firm intention to continue fighting"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/1607519392tripadvisor.webp",
      description: "Massa velit nibh suspendisse blandit justo dui nibh per natoque sagittis in dolor ve.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/1607519392tripadvisor.webp",
      slug: "China_orders_removal_of_105_apps_including_TripAdvisor",
      name: "China orders removal of 105 apps including TripAdvisor"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/16075185721607496437BHopal-nagar-nigam.webp",
      description: "Lacus felis lectus consectetuer.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/16075185721607496437BHopal-nagar-nigam.webp",
      slug: "Process_of_reservation_of_urban_bodies_completed_in_Madhya_Pradesh_Non_MLAs_will_get_the_mayors_ticket_only_BJP,see_he_names_of_the_major_contenders_of_both_parties",
      name: "Process of reservation of urban bodies completed in Madhya Pradesh Non-MLAs will get the mayor's ticket only: BJP, see the names of the major contenders of both parties"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Dolor morbi leo quis ac pellentesque tempor at mauris.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "ICC_T20_Rankings:_Rahul_ranks_eighth_in_top_three_Kohli",
      name: "ICC T20 Rankings: Rahul ranks eighth in top three, Kohli"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport3.webp",
      description: "Proin lacus sociosqu velit dignissim semper sociosqu.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport3.webp",
      slug: "Amandeep_WPGT_topped_the_first_day_of_the_eighth_stage",
      name: "Amandeep WPGT topped the first day of the eighth stage"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport2.webp",
      description: "Nulla classical Latin literature from 45 BC, making it over 2000 years old fames.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport2.webp",
      slug: "Ian_Chappell_praises_Rahane's_aggressive_style_captaincy",
      name: "Ian Chappell praises Rahane's aggressive style captaincy"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Porta netus eni per sodales nascetur pretium sodales.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "England_team_to_tour_Sri_Lanka_for_two_Test_matches",
      name: "England team to tour Sri Lanka for two Test matches"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport2.webp",
      description: "Vitae dolor aporta netus eni per sodale",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport2.webp",
      slug: "Jamshedpur_challenge_to_East_Bengal_looking_for_first_win",
      name: "Jamshedpur challenge to East Bengal looking for first win"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport3.webp",
      description: "Fames porta dui enim nisl habitant scelerisque pulvinar proin mi habitasse nulla habitant.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport3.webp",
      slug: "Real_Kashmir_United_REACH_AC_SEMI_FINALS",
      name: "Real Kashmir, United REACH AC SEMI-FINALS"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Purus felis augue tempus hymenaeos ipsum ad metus nostra turpis curae suscipit.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "Sri_Lanka_considering_cancelling_South_Africa_tour",
      name: "Sri Lanka considering cancelling South Africa tour"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Porta metus eros ultricies fringilla erat iaculis mus.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "Parthiv_Patel_says_goodbye_to_competitive_cricket",
      name: "Parthiv Patel says goodbye to competitive cricket"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/1607514297parthiv-patel.webp",
      description: "Lacus vitae ipsum congue vestibulum purus natoque magnis quis quisque ve id fringilla.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/1607514297parthiv-patel.webp",
      slug: "Ganguly_and_Kumble_will_be_special_to_me_as_captain:_Parthiv",
      name: "Ganguly and Kumble will be special to me as captain: Parthiv"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Morbi fusce cum urna ante classical Latin literature from 45 BC, making it over 2000 years old.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "Marsh_may_have_options_in_opener_for_a_short_time:_Border",
      name: "Marsh may have options in opener for a short time: Border"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport3.webp",
      description: "Lorem fusce nisi suscipit dictum ornare tincidunt.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport3.webp",
      slug: "Punia_Valarivan_best_player_Mona_Parthasarthi_wins_Best_Sports_Journalist_Award",
      name: "Punia, Valarivan best player, Mona Parthasarthi wins Best Sports Journalist Award"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Felis morbi ultricies magnis volutpat ullamcorper ultrices hymenaeos sem egestas purus.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "South_Africa_to_make_pak_tour_for_first_time_in_14_years",
      name: "South Africa to make pak tour for first time in 14 years"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Dolor risus sed massa aenean lectus sit ornare cursus netus aliquet dis.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "Pukowski_will_hopefully_be_fit_until_the_first_test_:_Cummins",
      name: "Pukowski will hopefully be fit until the first test : Cummins"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport3.webp",
      description: "Etiam netus.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport3.webp",
      slug: "Green_Swepson_into_Australia_A_squad_for_2nd_practice_match_against_India_A",
      name: "Green, Swepson into Australia A squad for 2nd practice match against India A"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport2.webp",
      description: "Morbi purus torquent in.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport2.webp",
      slug: "Chelsi_played_a_draw_from_Krasnodar",
      name: "Chelsi played a draw from Krasnodar"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport2.webp",
      description: "Lacus netus.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport2.webp",
      slug: "Sabella_Argentina's_manager_at_World_Cup_2014_dies",
      name: "Sabella, Argentina's manager at World Cup 2014, dies"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Porta proin nisi sed pellentesque felis pede urna fringilla dui suscipit hymenaeos mi.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "Indian_bowlers_were_tough_to_play_in_the_first_practice_match:_Green",
      name: "Indian bowlers were tough to play in the first practice match: Green"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Class nulla.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "India_fined_for_slow_over-speed_in_3rd_T20",
      name: "India fined for slow over-speed in 3rd T20"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Curae fames enim ve vel proin lorem a duis vestibulum sapien non.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "After_losing_the_first_two_ODIs_the_remaining_four_matches_were_like_a_new_series:_Rahul",
      name: "After losing the first two ODIs, the remaining four matches were like a new series: Rahul"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport3.webp",
      description: "Justo morbi cum nullam felis adipiscing et duis eget.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport3.webp",
      slug: "Yuventus_beats_Barcelona_Messi_heavy_on_Ronaldo",
      name: "Yuventus beats Barcelona, Messi heavy on Ronaldo"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/1607497744parthiv-patel.webp",
      description: "Massa fusce.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/1607497744parthiv-patel.webp",
      slug: "Parthiv_Patel_Retires_says_goodbye_to_competitive_cricket",
      name: "Parthiv Patel Retires says goodbye to competitive cricket"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport3.webp",
      description: "Morbi proin aliquet ridiculus nisl mus consectetuer.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport3.webp",
      slug: "Champions_League_match_postponed_when_players_leave_the_field_over_alleged_racism",
      name: "Champions League match postponed when players leave the field over alleged racism"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/1607494605virat-kholi.webp",
      description: "Justo donec conubia integer.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/1607494605virat-kholi.webp",
      slug: "it_was_costly_to_show_replays_on_the_screen_before_15_seconds__kohli_snapped_at_drs",
      name: "it was costly to show replays on the screen before 15 seconds , kohli snapped at drs ."
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Lorem felis.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "Warner_out_of_first_Test_against_India",
      name: "Warner out of first Test against India"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Magna felis amet.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "Test_cricket_needs_to_bowl_to_different_challenge_and_hardik:_Kohli",
      name: "Test cricket needs to bowl to different challenge and hardik: Kohli"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport2.webp",
      description: "Massa ipsum aenean ipsum dui augue vel ligula placerat tincidunt id.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport2.webp",
      slug: "Delay_in_deciding_to_take_DRS_as_mistake_unacceptable:_Kohli",
      name: "Delay in deciding to take DRS as mistake unacceptable: Kohli"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport3.webp",
      description: "Morbi nulla libero vitae elementum classical Latin literature from 45 BC, making it over 2000 years old.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport3.webp",
      slug: "Your_performance_was_unmatched_deserved_Man_of_the_Series_says_Hardik_to_Natarajan",
      name: "Your performance was unmatched, deserved Man of the Series, says Hardik to Natarajan"
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport1.webp",
      description: "Netus purus hac proin hendrerit.",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport1.webp",
      slug: "Pandya_says_I_am_returning_home.",
      name: "Pandya says, I am returning home."
    },
    {
      fullImgUrl: "https://img.ibc24.in/storage/news/pti_sport3.webp",
      description: "Donec risus long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using ",
      thumbImgUrl: "https://img.ibc24.in/storage/news/thumbs/pti_sport3.webp",
      slug: "Natarajan:_Kohli_could_be_key_for_India_in_T20_World_Cup",
      name: "Natarajan: Kohli could be key for India in T20 World Cup"
    }
]

