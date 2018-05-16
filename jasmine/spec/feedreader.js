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

    /* This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    
    describe('RSS Feeds', function() {
        
         /* This test makes sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */    
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */        
        
        it('URL is defined', function() {
           
           for (const feed of allFeeds) {
               
           expect(feed.url).toBeDefined();
           expect(feed.url.length).not.toBe(0);
           }           
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is defined', function () {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    describe('The menu', function() {
        
        /* Test that ensures the menu element is
         * hidden by default. 
         */
        
        it('is hidden by default', function() {

            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        
         it('changes if icon is clicked', function() {
            $menuIcon = $('.menu-icon-link');
//            first click on menuIcon
             $menuIcon.trigger('click');
             expect($('body').hasClass('menu-hidden')).toBe(false);            
//            second click on menuIcon
             $menuIcon.trigger('click');
             expect($('body').hasClass('menu-hidden')).toBe(true);    
        });
        
    });
    
    
    describe('Initial Entries', function() {
        
        beforeEach( function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('at least single .entry in .feed', function() {
            let numOfChildren = $('.feed .entry').length;
            expect(numOfChildren).toBeGreaterThan(0);
        });
    
    });
 
    
    describe('New Feed Selection', function() {
       
        beforeEach( function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        
        it('loads a feed that is different from the previous one', function(done) {
            let numOfChildren = $('.entry');
            expect(numOfChildren[0]).not.toBe(numOfChildren[1]);
         done();   
        });
        
    });
}());
