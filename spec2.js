describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
  
    beforeEach(function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
    });
  
    it('should have a title', function() {
      expect(browser.getTitle()).toEqual('Super Calculator');
      console.log('it has a tittle');
    });
  
    it('should add one and two', function() {
      firstNumber.sendKeys(1);
      secondNumber.sendKeys(2);
  
      goButton.click();
  
      expect(latestResult.getText()).toEqual('3');
      console.log('1 +2 = 3  ok');
    });
  
    it('should add four and six', function() {
        firstNumber.sendKeys(4);
       secondNumber.sendKeys(6);
       goButton.click();
      // Fill this in.
      expect(latestResult.getText()).toEqual('10');
      console.log('4 + 6 = 10');
    });
  
    it('should read the value from an input', function() {
      firstNumber.sendKeys(1);
      expect(firstNumber.getAttribute('value')).toEqual('1');

      console.log('read a value ok');
    });
  });