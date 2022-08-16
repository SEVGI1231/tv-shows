import { sortShowsAlphabetically } from "./sortShowsAlphabetically";

test("sort shows alphabetically according to the show name", () => {
  expect(
    sortShowsAlphabetically(
      {
        id: 250,
        name: "Kirby Buckets",
        genres: [],
        status: "Ended",
        runtime: 30,
        rating: { average: null },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg",
        },
        summary:
          "<p>The single-camera series that mixes live-action and animation stars Jacob Bertrand as the title character. <b>Kirby Buckets</b> introduces viewers to the vivid imagination of charismatic 13-year-old Kirby Buckets, who dreams of becoming a famous animator like his idol, Mac MacCallister. With his two best friends, Fish and Eli, by his side, Kirby navigates his eccentric town of Forest Hills where the trio usually find themselves trying to get out of a predicament before Kirby's sister, Dawn, and her best friend, Belinda, catch them. Along the way, Kirby is joined by his animated characters, each with their own vibrant personality that only he and viewers can see.</p>",
      },
      {
        id: 251,
        name: "Downton Abbey",
        genres: ["Drama", "Family", "Romance"],
        status: "Ended",
        runtime: 60,
        rating: { average: 8.8 },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/1/4601.jpg",
        },
        summary:
          "<p>The Downton Abbey estate stands a splendid example of confidence and mettle, its family enduring for generations and its staff a well-oiled machine of propriety. But change is afoot at Downton--change far surpassing the new electric lights and telephone. A crisis of inheritance threatens to displace the resident Crawley family, in spite of the best efforts of the noble and compassionate Earl, Robert Crawley; his American heiress wife, Cora his comically implacable, opinionated mother, Violet and his beautiful, eldest daughter, Mary, intent on charting her own course. Reluctantly, the family is forced to welcome its heir apparent, the self-made and proudly modern Matthew Crawley himself none too happy about the new arrangements. As Matthew's bristly relationship with Mary begins to crackle with electricity, hope for the future of Downton's dynasty takes shape. But when petty jealousies and ambitions grow among the family and the staff, scheming and secrets--both delicious and dangerous--threaten to derail the scramble to preserve Downton Abbey. <i>Downton Abbey</i> offers a spot-on portrait of a vanishing way of life.</p>",
      }
    )
  ).toBe(1);
});
