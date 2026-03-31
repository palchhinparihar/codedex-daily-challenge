const challenges = [
  {
    day: 1,
    title: "Wordle",
    time: "3:50",
    tries: 1,
    complexity: "O(1)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-02",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/tBgJsnwQlYD9w8BRuffb",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_daily-challenge-day-1-activity-7434624470100889601-2n9q"
  },
  {
    day: 2,
    title: "Blood Moon",
    time: "7:19",
    tries: 1,
    complexity: "O(1)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-03",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/dOgzW8I5yAJGpqaBxTVv",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_messy-journey-from-app-1-to-app-2-for-day-activity-7434975245901574144-5QuH"
  },
  {
    day: 3,
    title: "Holi",
    time: "16:03",
    tries: 2,
    complexity: "O(1)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-04",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/4xYtFClAuu0XGMY1G7iS",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-3-i-am-realizing-that-even-basic-problems-activity-7435348315510280193-QLkL"
  },
  {
    day: 4,
    title: "Homebrew Computer Club",
    time: "19:31",
    tries: 1,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-05",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/5X6MNzQf7v1ZL3x1OWLa",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-4-activity-7435704852418170880-6BC3"
  },
  {
    day: 5,
    title: "Alysa Liu",
    time: "9:34",
    tries: 2,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-06",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/fWq1I69uqmakar5eLAnO",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-5-in-the-skating-world-activity-7436065712080728064-rJZm"
  },
  {
    day: 6,
    title: "Daylight Savings",
    time: "4:25",
    tries: 1,
    complexity: "O(1)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-07",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/7qoYHOQQcC6MfHI6XRIl",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-6-happy-international-womens-day-to-activity-7436450890200412160-WwFk"
  },
  {
    day: 7,
    title: "International Women's Day",
    time: "2:26",
    tries: 3,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-08",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/CHENUzKDw2zBF4KUxeLq",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_happyyy-international-womens-day-to-all-activity-7436797352037896192-QUTg"
  },
  {
    day: 8,
    title: "Sputnik 9",
    time: "6:38",
    tries: 2,
    complexity: "O(1)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-09",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/SgRobB2rrf973Bb98nmm",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-8-the-challenge-is-sputnik-9-my-activity-7437153603544412160-IBzT"
  },
  {
    day: 9,
    title: "Ring Ring",
    time: "8:36",
    tries: 1,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-10",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/uoNnaMKoVHEKC87swRqf",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-9-the-challenge-is-ring-ring-my-activity-7437555339291512832-rVch"
  },
  {
    day: 10,
    title: "Hitchhiker's Guide",
    time: "7:01",
    tries: 1,
    complexity: "O(N3)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-11",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/ZTLCapVcT7g7eQNuVK0h",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-10-the-challenge-is-hitchhikers-guide-activity-7437816407192465408-WnWm"
  },
  {
    day: 11,
    title: "World Wide Web",
    time: "7:30",
    tries: 3,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-12",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/mcpMcVQO2IKOXtIdzXcT",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-11-in-the-web-activity-7438219743599210496-JvLQ"
  },
  {
    day: 12,
    title: "Palindrome",
    time: "5:10",
    tries: 1,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-13",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/Q3ZtI1NgWKvhpvPHP2yD",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_was-it-a-car-or-a-cat-i-saw-activity-7438585285636050944-1_Gk"
  },
  {
    day: 13,
    title: "Pi Day",
    time: "2:40",
    tries: 1,
    complexity: "O(1)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-14",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/Rdbw57UD95NHExODmUYY",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_pieeeee-activity-7438936486512832512-MA2z"
  },
  {
    day: 14,
    title: "Caesar Cipher",
    time: "8:16",
    tries: 1,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-15",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/tPSE1FvXIRWlEbWO11Ms",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_ai-wlsyph-womt-kcq-gpeww-4-activity-7439324625265913857-yUIj"
  },
  {
    day: 15,
    title: "Oscars 2026",
    time: "14:06",
    tries: 1,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-16",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/Bhv9GAqFDuGigvd27H5v",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_yeh-oscar-type-aise-hi-hote-hai-yaarr-activity-7439670100045123584-bvBv"
  },
  {
    day: 16,
    title: "Green Chicago River",
    time: "7:23",
    tries: 1,
    complexity: "O(N * h)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-17",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/KBqsN6VjHw5y3nU0d36D",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-16-the-challenge-is-green-chicago-river-activity-7440041354396692480-FtKl"
  },
  {
    day: 17,
    title: "Flight Vouchers",
    time: "12:04",
    tries: 3,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-18",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/Zy5O4pzSUYpAfMTZkwyE",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_dont-wait-too-longgg-activity-7440418195376812032-DBuh"
  },
  {
    day: 18,
    title: "March Madness",
    time: "4:53",
    tries: 1,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-19",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/kqLAiABNO8LJGRslbJvN",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-18-the-challenge-is-march-madness-activity-7440762852669333504-JWSa"
  },
  {
    day: 19,
    title: "Cherry Blossoms",
    time: "17:48",
    tries: 2,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-20",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/N0G8MgkriGBpZOhKPDdO",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_happy-cherry-blossomss-activity-7441125252858015744-firk"
  },
  {
    day: 20,
    title: "First Tweet",
    time: "14:52",
    tries: 2,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-21",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/SUIKtObmdeU2mHlS3cq5",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_cant-believe-its-x-not-twitter-lol-activity-7441446440159121408-m_Vb"
  },
  {
    day: 21,
    title: "Water Day",
    time: "11:31",
    tries: 1,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-22",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/yiTxutJneHFEB0e8wY8X",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_save-water-activity-7441850786956943360--KPJ"
  },
  {
    day: 22,
    title: "Cuddly Kittens",
    time: "24:33",
    tries: 3,
    complexity: "O(N2)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-23",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/PWzTlxrbDu4sc510sFwt",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-22-the-challenge-is-cuddly-kittens-activity-7442220332364705793-qOVv"
  },
  {
    day: 23,
    title: "Earthquake Anomaly",
    time: "18:13",
    tries: 3,
    complexity: "O(N log N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-24",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/NRL5OuriP4twJe5vUU8y",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_earthquake-anomaly-activity-7442577222596632577-AGf2"
  },
  {
    day: 24,
    title: "Opening Day",
    time: "8:13",
    tries: 1,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-25",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/sJXvgWxtBJljasnFhLmR",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_opening-day-activity-7442939706461523968-550h"
  },
  {
    day: 25,
    title: "Flatten Array",
    time: "16:39",
    tries: 1,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-26",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/uClbvkRNNPxtNwTTbbIn",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-25-the-challenge-is-flatten-array-activity-7443279004310315008-ncoc"
  },
  {
    day: 26,
    title: "Infinite Monkey Theorem",
    time: "26:04",
    tries: 2,
    complexity: "O(N * M)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-27",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/2oHEPPQ0TiVL2UTozUYY",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-26-the-challenge-is-infinite-monkey-share-7443682947083386880-fHun"
  },
  {
    day: 27,
    title: "28 Days Later",
    time: "22:29",
    tries: 1,
    complexity: "O(N * M)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-28",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/96G05MLWC9W7uAC1BBlh",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_day-27-the-challenge-is-28-days-later-activity-7444060081543102464-pymt"
  },
  {
    day: 28,
    title: "Leaderboard Stats",
    time: "5:23",
    tries: 1,
    complexity: "O(1)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-29",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/EIBRxIfeWlDL6Vc5Q4ZC",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_i-am-under-top-the-10-hehe-ugcPost-7444385883920781312-vZvJ"
  },
  {
    day: 29,
    title: "Ye Olde Emoticons",
    time: "15:26",
    tries: 4,
    complexity: "O(N * K)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-30",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/jHb5iHJd3KdW7y31uaNd",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_activity-7444637140065345536-tMF5"
  },
  {
    day: 30,
    title: "My Best Streak",
    time: "2:20",
    tries: 1,
    complexity: "O(N)",
    problemUrl: "https://www.codedex.io/daily-challenge/2026-03-31",
    communityUrl: "https://www.codedex.io/community/monthly-challenge/submission/4pPRroMs4rAA0VncoUvm",
    linkedinUrl: "https://www.linkedin.com/posts/palchhinparihar_a-sweet-goodbye-activity-7444749218004660224-T34I"
  }
];

const dayGrid = document.getElementById("dayGrid");
const musicToggle = document.getElementById("musicToggle");
const sparkleBtn = document.getElementById("sparkleBtn");
const startJourney = document.getElementById("startJourney");
const toast = document.getElementById("toast");
const walkerTrack = document.getElementById("walkerTrack");
const walkerSprite = document.getElementById("walkerSprite");

const dayModal = document.getElementById("dayModal");
const closeModal = document.getElementById("closeModal");
const modalDay = document.getElementById("modalDay");
const modalTitle = document.getElementById("modalTitle");
const modalNote = document.getElementById("modalNote");
const modalLinks = document.getElementById("modalLinks");
const modalCode = document.getElementById("modalCode");
const modalExplanation = document.getElementById("modalExplanation");
const journeyIntro = document.getElementById("journeyIntro");
const timelineSection = document.getElementById("timeline");

let audioEnabled = false;
let audioCtx;
let loopTimer;
let walkTimer;
let lastStepToneAt = 0;
let walkerCurrentX = 0;
let walkerTargetX = 0;
let walkerRafId;
let journeyRunning = false;

const codeCache = new Map();

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1300);
}

function ensureAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playTone(freq, duration = 0.12, type = "triangle", volume = 0.045) {
  if (!audioEnabled || !audioCtx) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();

  osc.type = type;
  osc.frequency.value = freq;
  osc2.type = "sine";
  osc2.frequency.value = freq * 2;

  filter.type = "lowpass";
  filter.frequency.value = 1800;

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(volume, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(filter);
  osc2.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  osc2.start(now);
  osc.stop(now + duration);
  osc2.stop(now + duration);
}

function playMelody(notes, gap = 90) {
  if (!audioEnabled || !audioCtx) return;
  notes.forEach((note, idx) => {
    setTimeout(() => playTone(note[0], note[1], note[2] || "square", note[3] || 0.06), idx * gap);
  });
}

function startAmbientLoop() {
  clearInterval(loopTimer);
  let step = 0;
  const seq = [523.25, 659.25, 783.99, 659.25, 587.33, 659.25];
  loopTimer = setInterval(() => {
    const n = seq[step % seq.length];
    playTone(n, 0.14, "triangle", 0.022);
    step += 1;
  }, 540);
}

function stopAmbientLoop() {
  clearInterval(loopTimer);
}

function exactNote(item) {
  return `Time Taken: ${item.time} | Tries: ${item.tries} | Time Complexity: ${item.complexity}`;
}

function extractDocComment(code) {
  const text = code.trimStart();
  const tripleSingle = text.match(/^'''\s*([\s\S]*?)\s*'''/);
  if (tripleSingle) {
    return tripleSingle[1].trim();
  }

  const tripleDouble = text.match(/^"""\s*([\s\S]*?)\s*"""/);
  if (tripleDouble) {
    return tripleDouble[1].trim();
  }

  return "No day note comment was found in this file.";
}

function stripLeadingDocComment(code) {
  const cleaned = code.replace(/^\s*(?:'''[\s\S]*?'''|"""[\s\S]*?""")\s*/u, "");
  return cleaned.trimStart();
}

function explainComplexity(notation) {
  const map = {
    "O(1)": "Constant time: runtime stays the same regardless of input size.",
    "O(N)": "Linear time: one pass over N items.",
    "O(N2)": "Quadratic time: nested work over N items.",
    "O(N3)": "Cubic time: three nested levels of work over N.",
    "O(N * K)": "Linear in N with an extra factor K per item.",
    "O(N * M)": "Work scales with both N and M dimensions.",
    "O(N * h)": "Linear in N with an additional factor h per operation.",
    "O(N log N)": "Near-linear time: sorting/divide-and-conquer pattern."
  };

  return map[notation] || "Growth follows the stated complexity notation.";
}

function buildExplanation(docComment, complexity) {
  const approach = docComment && !docComment.startsWith("No day note")
    ? `\n${docComment}`
    : "Approach:\nNo approach note was found in the file.";

  return `${approach}\n\nTime Complexity:\n${complexity} - ${explainComplexity(complexity)}`;
}

async function loadDayCode(day) {
  if (codeCache.has(day)) {
    return codeCache.get(day);
  }

  const paths = [`../code/day${day}.py`, `/code/day${day}.py`];
  for (const path of paths) {
    try {
      const res = await fetch(path, { cache: "no-store" });
      if (!res.ok) continue;
      const text = await res.text();
      if (text.trim()) {
        codeCache.set(day, text);
        return text;
      }
    } catch {
      // Ignore fetch failure and try the next path.
    }
  }

  const fallback = "Unable to load code automatically in this environment. Open the file directly: ../code/dayX.py";
  codeCache.set(day, fallback);
  return fallback;
}

function renderModalLinks(item) {
  modalLinks.innerHTML = `
    <a class="pixel-link" href="${item.problemUrl}" target="_blank" rel="noreferrer">Problem</a>
    <a class="pixel-link" href="${item.communityUrl}" target="_blank" rel="noreferrer">Community Post</a>
    <a class="pixel-link" href="${item.linkedinUrl}" target="_blank" rel="noreferrer">LinkedIn Post</a>
    <a class="pixel-link" href="../code/day${item.day}.py" target="_blank" rel="noreferrer">Open Python File</a>
  `;
}

function openDayModal(item) {
  modalDay.textContent = `DAY ${item.day}`;
  modalTitle.textContent = `${item.title}`;
  modalNote.textContent = exactNote(item);
  modalCode.textContent = "Loading exact code...";
  modalExplanation.textContent = "Building explanation...";
  renderModalLinks(item);

  dayModal.classList.add("open");
  dayModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  playMelody([
    [294, 0.06],
    [392, 0.08],
    [523, 0.1]
  ]);

  loadDayCode(item.day).then((code) => {
    const approachText = extractDocComment(code);
    modalCode.textContent = stripLeadingDocComment(code);
    modalExplanation.textContent = buildExplanation(approachText, item.complexity);
  });
}

function closeDayModal() {
  dayModal.classList.remove("open");
  dayModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateWalkerPosition() {
  if (!walkerTrack) return;

  const doc = document.documentElement;
  const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
  const progress = Math.min(1, window.scrollY / maxScroll);
  const spriteWidth = walkerTrack.offsetWidth || 58;
  const maxX = Math.max(0, window.innerWidth - spriteWidth - 6);
  walkerTargetX = Math.round(maxX * progress);

  clearTimeout(walkTimer);
  walkerSprite.classList.add("walking");
  walkTimer = setTimeout(() => walkerSprite.classList.remove("walking"), 210);

  const now = Date.now();
  if (audioEnabled && now - lastStepToneAt > 180) {
    lastStepToneAt = now;
    playTone(280 + (progress * 90), 0.045, "triangle", 0.018);
  }
}

function runWalkerLoop() {
  if (!walkerTrack) return;

  const delta = walkerTargetX - walkerCurrentX;
  walkerCurrentX += delta * 0.16;

  if (Math.abs(delta) < 0.25) {
    walkerCurrentX = walkerTargetX;
  }

  walkerTrack.style.transform = `translate3d(${walkerCurrentX.toFixed(2)}px, 0, 0)`;

  walkerRafId = requestAnimationFrame(runWalkerLoop);
}

function onScrollOrResize() {
  updateWalkerPosition();
}

function smoothScrollToSection(target, duration = 950) {
  if (!target) return Promise.resolve();

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + window.scrollY - 14;
  const distance = targetY - startY;
  const start = performance.now();

  const easeOutCubic = (t) => 1 - (1 - t) ** 3;

  return new Promise((resolve) => {
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(step);
  });
}

async function runJourneyIntro() {
  if (journeyRunning || !journeyIntro || !timelineSection) return;

  journeyRunning = true;
  startJourney.disabled = true;
  startJourney.textContent = "Journeying...";

  journeyIntro.classList.add("open");
  journeyIntro.setAttribute("aria-hidden", "false");

  sparklesAt(window.innerWidth * 0.5, window.innerHeight * 0.46, 18);
  playMelody([
    [523, 0.08, "triangle", 0.03],
    [587, 0.08, "triangle", 0.03],
    [659, 0.1, "triangle", 0.032],
    [783, 0.12, "triangle", 0.034]
  ], 90);

  await new Promise((resolve) => setTimeout(resolve, 1120));
  journeyIntro.classList.remove("open");
  journeyIntro.setAttribute("aria-hidden", "true");

  await smoothScrollToSection(timelineSection, 980);

  timelineSection.classList.add("landing-highlight");
  sparklesAt(window.innerWidth * 0.5, Math.max(110, timelineSection.getBoundingClientRect().top + 110), 20);
  playMelody([
    [659, 0.08, "triangle", 0.03],
    [783, 0.1, "triangle", 0.032],
    [880, 0.12, "triangle", 0.035]
  ], 90);

  setTimeout(() => {
    timelineSection.classList.remove("landing-highlight");
  }, 900);

  startJourney.disabled = false;
  startJourney.textContent = "Start Journey";
  journeyRunning = false;
}

function createCards() {
  const fragment = document.createDocumentFragment();

  challenges.forEach((item) => {
    const card = document.createElement("article");
    card.className = "day-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open details for Day ${item.day}, ${item.title}`);
    card.innerHTML = `
      <p class="day">DAY ${item.day}</p>
      <h4 class="title">${item.title}</h4>
      <p class="meta">Time: ${item.time}</p>
      <p class="meta">Tries: ${item.tries}</p>
      <p class="meta">Complexity: ${item.complexity}</p>
    `;

    card.addEventListener("mouseenter", () => {
      playTone(440 + item.day * 4, 0.05);
    });

    card.addEventListener("click", () => {
      showToast(`Day ${item.day}: opened details`);
      sparklesAt(card.getBoundingClientRect().left + 30, card.getBoundingClientRect().top + 30, 5);
      openDayModal(item);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDayModal(item);
      }
    });

    fragment.appendChild(card);
  });

  dayGrid.appendChild(fragment);
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-counter]");

  counters.forEach((counter) => {
    const target = Number(counter.getAttribute("data-counter"));
    let current = 0;
    const tick = Math.max(1, Math.ceil(target / 40));

    const interval = setInterval(() => {
      current += tick;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      counter.textContent = current;
    }, 24);
  });
}

function sparklesAt(x, y, count = 12) {
  const palette = ["#ff8d6a", "#4cc9b0", "#ffd166", "#ffb3c7", "#8fe3ff"];

  for (let i = 0; i < count; i += 1) {
    const sp = document.createElement("div");
    const isDot = Math.random() > 0.58;
    const radius = 30 + Math.random() * 105;
    const angle = Math.random() * Math.PI * 2;
    const dx = Math.cos(angle) * radius;
    const dy = Math.sin(angle) * radius - (10 + Math.random() * 24);
    const size = 7 + Math.random() * 12;
    const duration = 620 + Math.random() * 520;
    const color = palette[Math.floor(Math.random() * palette.length)];

    sp.className = `sparkle ${isDot ? "sparkle-dot" : "sparkle-star"}`;
    sp.style.left = `${x}px`;
    sp.style.top = `${y}px`;
    sp.style.setProperty("--dx", `${dx.toFixed(2)}px`);
    sp.style.setProperty("--dy", `${dy.toFixed(2)}px`);
    sp.style.setProperty("--size", `${size.toFixed(2)}px`);
    sp.style.setProperty("--dur", `${duration.toFixed(0)}ms`);
    sp.style.setProperty("--spin", `${(-100 + Math.random() * 200).toFixed(0)}deg`);
    sp.style.setProperty("--color", color);
    document.body.appendChild(sp);
    setTimeout(() => sp.remove(), duration + 140);
  }
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        if (entry.target.classList.contains("milestones")) {
          if (!entry.target.dataset.counted) {
            animateCounters();
            entry.target.dataset.counted = "1";
            playMelody([
              [392, 0.08, "triangle", 0.03],
              [523, 0.08, "triangle", 0.03],
              [659, 0.11, "triangle", 0.035]
            ]);
          }
        } else {
          playTone(523, 0.08, "triangle", 0.028);
        }
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

musicToggle.addEventListener("click", async () => {
  ensureAudio();
  if (audioCtx.state === "suspended") {
    await audioCtx.resume();
  }

  audioEnabled = !audioEnabled;
  musicToggle.setAttribute("aria-pressed", String(audioEnabled));
  musicToggle.textContent = `Sound: ${audioEnabled ? "On" : "Off"}`;

  if (audioEnabled) {
    playMelody([
      [523, 0.1, "triangle", 0.03],
      [659, 0.1, "triangle", 0.03],
      [783, 0.12, "triangle", 0.034]
    ]);
    startAmbientLoop();
    showToast("Cute sounds unlocked");
  } else {
    stopAmbientLoop();
    showToast("Sound muted");
  }
});

sparkleBtn.addEventListener("click", () => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  sparklesAt(centerX, centerY, 34);
  setTimeout(() => sparklesAt(centerX + 24, centerY - 26, 16), 120);
  setTimeout(() => sparklesAt(centerX - 26, centerY + 20, 14), 240);
  playMelody([
    [659, 0.06, "triangle", 0.03],
    [783, 0.07, "triangle", 0.03],
    [988, 0.08, "triangle", 0.032],
    [1174, 0.1, "triangle", 0.034]
  ], 65);
});

startJourney.addEventListener("click", () => {
  runJourneyIntro();
});

closeModal.addEventListener("click", closeDayModal);

dayModal.addEventListener("click", (event) => {
  if (event.target === dayModal) {
    closeDayModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dayModal.classList.contains("open")) {
    closeDayModal();
  }
});

window.addEventListener("scroll", onScrollOrResize, { passive: true });
window.addEventListener("resize", onScrollOrResize);

window.addEventListener("beforeunload", stopAmbientLoop);

const counterEls = document.querySelectorAll(".value[data-counter]");
const totalTries = challenges.reduce((sum, item) => sum + item.tries, 0);
if (counterEls[2]) {
  counterEls[2].setAttribute("data-counter", String(totalTries));
}

createCards();
runWalkerLoop();
onScrollOrResize();
