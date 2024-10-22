import { Playlist } from "../support/POM";
const action = new Playlist();

beforeEach(() => {
  action.visitPage();
});

describe("AQA Engineer test ", () => {
  it("Happy path , inserting a leter and having all the results with the same leter", () => {
    //modifing leter to an existing song who has that leter inside  will test this function

    let leter = "a";
    action.addSingleTrack(leter);
    action.verifySearch(leter);
  });
  it("inserting a leter that doesnt exist in the tracks name", () => {
    //modifing wleter to any character or leters like qfx will test this function
    let wLeter = "q";
    action.addWrongLeter(wLeter);
    action.verifyWrongResult();
  });

  it("testing add functionallity", () => {
    // modifing number variable will change the track positioned from 0 to 4 place
    let number = 3;
    action.addButton(number);
    action.verifyAddedTrack();
  });

  it("testing adding several tracks at once functionallity", () => {
    //modifing the variable Tracks you are able to add the ammount of tracks you want from 1 to 5
    let tracks = 2;
    action.addSeveralTracks(tracks);
    action.VerifyTracks(tracks);
  });
});
