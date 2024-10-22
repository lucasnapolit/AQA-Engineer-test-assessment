export class Playlist {
  elememts = {
    url: "https://vite-react-alpha-lemon.vercel.app/",
    checkbox: "[type='checkbox']",
    button: ".MuiButton-sizeMedium",
    playlistTracks:
      "#playlist .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4.css-1udb513",
    trackList:
      "#tracklist .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4.css-1udb513",
    searchBar: "input[id=':r0:']",
    notFound: ".MuiTypography-root.MuiTypography-body1.css-3ffyn9",
    firstAddButton: "(//button[@type='button'][normalize-space()='+'])",
  };

  addButton(number) {
    cy.get(this.elememts.trackList)
      .eq(number)
      .invoke("text")
      .as("trackListName");
    cy.xpath(this.elememts.firstAddButton).eq(number).click();
  }
  verifyAddedTrack() {
    cy.get(this.elememts.playlistTracks)
      .eq(0)
      .invoke("text")
      .then((second) => {
        cy.get("@trackListName").then((first) => {
          expect(first.trim()).to.equal(second.trim());
        });
      });
  }

  visitPage() {
    cy.visit(this.elememts.url);
  }

  addSingleTrack(leter) {
    cy.get(this.elememts.searchBar).type(leter);
  }
  verifySearch(leter) {
    cy.get(this.elememts.trackList).should("contain", leter);
  }

  addWrongLeter(wLeter) {
    cy.get(this.elememts.searchBar).type(wLeter);
  }
  verifyWrongResult() {
    cy.get(this.elememts.notFound).should("have.text", "Not found");
  }

  addSeveralTracks(tracks) {
    cy.get(this.elememts.checkbox).each((track, index) => {
      if (index < tracks) {
        cy.wrap(track).check();
      }
    });
    cy.get(this.elememts.button).click();
  }
  VerifyTracks(tracks) {
    cy.get(this.elememts.playlistTracks).its("length").should("eq", tracks);
  }
}
