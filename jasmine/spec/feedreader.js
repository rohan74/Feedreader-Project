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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
     it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
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
          })
    });

        /* TODO: Write a test that loops through each feed
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
    })
    });
 });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

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

          /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

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
