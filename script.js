// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.
// 1. Select the collection and preference controls.

const $collection = document.querySelector("#collection")
const $theme = document.querySelector("#theme")
const $layout = document.querySelector("#layout")
const $status = document.querySelector("#status")

const STORAGE_KEY = "mtm6302-creature-preferences"


// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.

$creatures.forEach(function(creature) {
  const creatureHTML = `
    <li class="creature">
      <img src="${creature.image}" alt="${creature.alt}">
      <div class="creature-info">
        <h3>${creature.name}</h3>
        <p class="creature-description">${creature.description}</p>
      </div>
    </li>
  `
  $collection.insertAdjacentHTML("beforeend", creatureHTML)
})


// 3. Listen for changes to each preference control and update the appearance.

function updateAppearance() {
  document.body.dataset.theme = $theme.value
  $collection.dataset.layout = $layout.value
}

$theme.addEventListener("change", function () {
  updateAppearance()
  savePreferences()
})

$layout.addEventListener("change", function () {
  updateAppearance()
  savePreferences()
})


// 4. Save both selected preferences to Local Storage.

function savePreferences() {
  const preferences = {
    theme: $theme.value,
    layout: $layout.value
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
  $status.textContent = "Your preferences have been saved!"
}


// 5. Check for saved data on load and restore the controls and appearance.

function loadPreferences() {
  const savedPreferences = localStorage.getItem(STORAGE_KEY)

  if (savedPreferences) {
    try {
      const preferences = JSON.parse(savedPreferences)

      $theme.value = preferences.theme
      $layout.value = preferences.layout
      updateAppearance()

      $status.textContent = "Welcome back! Your preferences have been restored."
    } catch (error) {
      $status.textContent = "Your saved preferences couldn't be read. Choose new ones below."
    }
  } else {
    $status.textContent = "No saved preferences yet. Choose a habitat and layout to begin."
  }
}

// Run it once when the page opens.
loadPreferences()
