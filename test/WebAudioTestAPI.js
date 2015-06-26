describe("WebAudioTestAPI", function() {
  var WebAudioTestAPI = global.WebAudioTestAPI;

  after(function() {
    WebAudioTestAPI.use();
  });

  describe("VERSION", function() {
    it("get: string", function() {
      assert(typeof WebAudioTestAPI.VERSION === "string");
      if (typeof global.WEB_AUDIO_TEST_API_VERSION === "string") {
        assert(WebAudioTestAPI.VERSION === global.WEB_AUDIO_TEST_API_VERSION);
      }
    });
  });

  describe("sampleRate", function() {
    it("get/set: number", function() {
      assert(typeof WebAudioTestAPI.sampleRate === "number");
    });
  });

  describe("getState", function() {
    it("(name: string): string", function() {
      assert(WebAudioTestAPI.getState("AnalyserNode#getFloatTimeDomainData") === "disabled");
    });
  });

  describe("setState", function() {
    it("(name: string, value: string): string", function() {
      WebAudioTestAPI.setState({
        "AnalyserNode#getFloatTimeDomainData": "enabled",
      });

      assert(WebAudioTestAPI.getState("AnalyserNode#getFloatTimeDomainData") === "enabled");

      WebAudioTestAPI.setState({
        "AnalyserNode#getFloatTimeDomainData": "disabled",
      });
    });
  });

  describe("unuse", function() {
    it("(): void", function() {
      WebAudioTestAPI.unuse();

      assert(global.AudioContext !== WebAudioTestAPI.AudioContext);
      assert(global.OfflineAudioContext !== WebAudioTestAPI.OfflineAudioContext);
    });
  });

  describe("use", function() {
    it("(): void", function() {
      WebAudioTestAPI.use();

      assert(global.AudioContext === WebAudioTestAPI.AudioContext);
      assert(global.OfflineAudioContext === WebAudioTestAPI.OfflineAudioContext);
    });
  });
});
