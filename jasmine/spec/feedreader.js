/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
 $(function() {
    /*  a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
         it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        //iteriate url object of allFeeds array
        it("url defined", function(){
            allFeeds.forEach(function(feed){
        // test if url exist
        expect(feed.url).toBeDefined();
        //test for non-empty url
        expect(feed.url.length).not.toBe(0);
    });
        });

        /* test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

      //iteriate url object of allFeeds array
      it("name defined", function(){
        allFeeds.forEach(function(feed){
        // test if url exist
        expect(feed.name).toBeDefined();
        //test for non-empty url
        expect(feed.name.length).not.toBe(0);
    });
    });
  });

    /*  test suite named "The menu" */

// suit describe to test menu event if it is hidden or shown on clicking and default poistion
    describe('The menu', function(){
            var menu = document.body;

            it('hidden menu', function(){
            // test to check if body element(menu) has class menu-hidden
            expect(menu.classList.contains('menu-hidden')).toBe(true);
        });

            it('menu visibility', function(){
            // intialise the menu before testing
            $(".menu-icon-link").click();
            // test for display menu when clicked
            expect(menu.classList.contains('menu-hidden')).toBe(false);
            //closing the menu
            $(".menu-icon-link").click();
            // test for hidding menu when clicking again
            expect(menu.classList.contains('menu-hidden')).toBe(true);
        });
    });

/* test suite named "Initial Entries" */


//the suite describe  if the feed has loaded and has atleast on entry
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0,done);
    //intialise the function
    });

        it('loadFeeds has atleast one .entry within feed', function(done){
            var lengthOfWork = $('.feed .entry').length;
            // using length to check if there any entry
            expect(lengthOfWork).toBeGreaterThan(0);
            done();
        });
    });

// suite describe if new feed loading or not.
    describe("New Feed Selection", function (){
        var oldFeed,
        newFeed;
        beforeEach(function(done){
            loadFeed(0,function (){
                oldFeed = $(".feed").text();
            //stored feed contents in oldfeed
            done();
            });
        });

        it('new feed is loaded by loadFeed', function(done){
            loadFeed(2,function(){
                newFeed = $(".feed").text();
            //stored  feed content in new feed
            expect(oldFeed).not.toBe(newFeed);
            done();
           });
        });

    });


}());
