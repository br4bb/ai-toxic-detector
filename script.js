// Fallback kamus bila fetch JSON gagal (misal dibuka via file://)
const FALLBACK_DICTIONARY = [
  { word: "anjing", severity: "medium", lang: "id" },
  { word: "anjir", severity: "medium", lang: "id" },
  { word: "anjrit", severity: "medium", lang: "id" },
  { word: "anying", severity: "medium", lang: "id" },
  { word: "asu", severity: "medium", lang: "id" },
  { word: "babi", severity: "medium", lang: "id" },
  { word: "bajingan", severity: "heavy", lang: "id" },
  { word: "bangsat", severity: "heavy", lang: "id" },
  { word: "banci", severity: "medium", lang: "id" },
  { word: "bego", severity: "medium", lang: "id" },
  { word: "belegug", severity: "medium", lang: "id" },
  { word: "bencong", severity: "medium", lang: "id" },
  { word: "biadab", severity: "heavy", lang: "id" },
  { word: "bodoh", severity: "medium", lang: "id" },
  { word: "bodat", severity: "medium", lang: "id" },
  { word: "bujanginam", severity: "heavy", lang: "id" },
  { word: "brengsek", severity: "medium", lang: "id" },
  { word: "cacat", severity: "medium", lang: "id" },
  { word: "cok", severity: "heavy", lang: "id" },
  { word: "coeg", severity: "heavy", lang: "id" },
  { word: "cukima", severity: "heavy", lang: "id" },
  { word: "dancok", severity: "heavy", lang: "id" },
  { word: "edan", severity: "medium", lang: "id" },
  { word: "fugu", severity: "medium", lang: "id" },
  { word: "gatel", severity: "light", lang: "id" },
  { word: "gateli", severity: "light", lang: "id" },
  { word: "gila", severity: "medium", lang: "id" },
  { word: "gobag", severity: "medium", lang: "id" },
  { word: "goblog", severity: "medium", lang: "id" },
  { word: "goblok", severity: "medium", lang: "id" },
  { word: "iblis", severity: "medium", lang: "id" },
  { word: "idiot", severity: "medium", lang: "id" },
  { word: "jahanam", severity: "heavy", lang: "id" },
  { word: "jancok", severity: "heavy", lang: "id" },
  { word: "jancuk", severity: "heavy", lang: "id" },
  { word: "jangkrik", severity: "medium", lang: "id" },
  { word: "jablay", severity: "medium", lang: "id" },
  { word: "jamput", severity: "heavy", lang: "id" },
  { word: "kampang", severity: "heavy", lang: "id" },
  { word: "kampret", severity: "light", lang: "id" },
  { word: "kethek", severity: "medium", lang: "id" },
  { word: "kehed", severity: "medium", lang: "id" },
  { word: "kimak", severity: "heavy", lang: "id" },
  { word: "kontol", severity: "heavy", lang: "id" },
  { word: "kunyuk", severity: "medium", lang: "id" },
  { word: "lasak", severity: "medium", lang: "id" },
  { word: "lontong", severity: "medium", lang: "id" },
  { word: "maid", severity: "medium", lang: "id" },
  { word: "matamu", severity: "medium", lang: "id" },
  { word: "memek", severity: "heavy", lang: "id" },
  { word: "mentel", severity: "medium", lang: "id" },
  { word: "monyet", severity: "medium", lang: "id" },
  { word: "ndasmu", severity: "medium", lang: "id" },
  { word: "ngentot", severity: "heavy", lang: "id" },
  { word: "ontohod", severity: "medium", lang: "id" },
  { word: "pantek", severity: "heavy", lang: "id" },
  { word: "pekok", severity: "medium", lang: "id" },
  { word: "pelacur", severity: "heavy", lang: "id" },
  { word: "perek", severity: "medium", lang: "id" },
  { word: "poyok", severity: "medium", lang: "id" },
  { word: "puki", severity: "heavy", lang: "id" },
  { word: "pukimak", severity: "heavy", lang: "id" },
  { word: "raimu", severity: "medium", lang: "id" },
  { word: "sampah", severity: "light", lang: "id" },
  { word: "sarap", severity: "medium", lang: "id" },
  { word: "setan", severity: "medium", lang: "id" },
  { word: "siah", severity: "medium", lang: "id" },
  { word: "sontoloyo", severity: "medium", lang: "id" },
  { word: "suraing", severity: "medium", lang: "id" },
  { word: "tai", severity: "medium", lang: "id" },
  { word: "tako", severity: "medium", lang: "id" },
  { word: "tolol", severity: "medium", lang: "id" },
  { word: "wedhus", severity: "medium", lang: "id" },

  { word: "asshole", severity: "heavy", lang: "en" },
  { word: "bastard", severity: "heavy", lang: "en" },
  { word: "bitch", severity: "heavy", lang: "en" },
  { word: "bullshit", severity: "medium", lang: "en" },
  { word: "crap", severity: "light", lang: "en" },
  { word: "cunt", severity: "heavy", lang: "en" },
  { word: "damn", severity: "light", lang: "en" },
  { word: "dick", severity: "heavy", lang: "en" },
  { word: "douche", severity: "medium", lang: "en" },
  { word: "dumb", severity: "light", lang: "en" },
  { word: "dumbass", severity: "medium", lang: "en" },
  { word: "fool", severity: "light", lang: "en" },
  { word: "fuck", severity: "heavy", lang: "en" },
  { word: "fucker", severity: "heavy", lang: "en" },
  { word: "idiot", severity: "medium", lang: "en" },
  { word: "jerk", severity: "light", lang: "en" },
  { word: "loser", severity: "light", lang: "en" },
  { word: "motherfucker", severity: "heavy", lang: "en" },
  { word: "moron", severity: "medium", lang: "en" },
  { word: "pussy", severity: "heavy", lang: "en" },
  { word: "retard", severity: "medium", lang: "en" },
  { word: "rubbish", severity: "light", lang: "en" },
  { word: "shit", severity: "medium", lang: "en" },
  { word: "slut", severity: "heavy", lang: "en" },
  { word: "stupid", severity: "medium", lang: "en" },
  { word: "suck", severity: "light", lang: "en" },
  { word: "sucks", severity: "light", lang: "en" },
  { word: "trash", severity: "light", lang: "en" },
  { word: "wanker", severity: "medium", lang: "en" },
  { word: "whore", severity: "heavy", lang: "en" }
];

const WHITELIST = new Set(["branding", "suckling", "assume"]);
const HISTORY_KEY = "toxic_history_v1";
const dictionaryMap = new Map();

const SEVERITY_WEIGHT = {
  light: 1,
  medium: 2,
  heavy: 3
};

const SAMPLE_TEXTS = {
  positif: "Terima kasih atas bantuannya, aplikasi ini keren sekali!",
  campur: "Produknya lumayan, tapi support agak lambat dan bikin kesal.",
  negatif: "Kamu benar-benar goblok dan pelayananmu sucks banget!"
};

// Muat kamus toxic; jika fetch gagal, gunakan fallback
async function loadDictionary() {
  try {
    const response = await fetch("data/toxic_words.json");
    if (!response.ok) throw new Error("Gagal fetch JSON");
    const raw = await response.json();
    normalizeDictionary(raw);
  } catch (err) {
    console.warn("Fetch gagal, menggunakan fallback:", err.message);
    normalizeDictionary(FALLBACK_DICTIONARY);
  }
}

// Normalisasi kamus agar selalu berbentuk Map(word -> severity)
function normalizeDictionary(raw) {
  dictionaryMap.clear();
  (raw || []).forEach((entry) => {
    if (typeof entry === "string") {
      dictionaryMap.set(entry.toLowerCase(), "medium");
      return;
    }
    const word = (entry.word || "").toLowerCase();
    const severity = entry.severity || "medium";
    if (word) dictionaryMap.set(word, severity);
  });
}

// Preprocessing: lowercase, pisah tanda baca, tokenisasi, stemming ringan
function preprocessText(text) {
  if (!text) return [];
  const normalized = text.toLowerCase();
  const tokens = normalized
    .replace(/[^a-z0-9\u00C0-\u024f\u1E00-\u1EFF\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map(stemToken);
  return tokens;
}

// Stemming ringan untuk variasi sederhana (indo + en)
function stemToken(token) {
  let w = token;
  w = w.replace(/(nya|lah|kah|pun)$/i, ""); // imbuhan umum
  w = w.replace(/(ing|ed|es|s)$/i, (m) => (m === "s" && w.length <= 3 ? m : "")); // ing/es/s plural
  return w || token;
}

// Deteksi kata toxic dan hitung metrik
function detectToxic(tokens) {
  if (!tokens.length) {
    return {
      totalWords: 0,
      toxicCount: 0,
      percent: 0,
      toxicTokens: new Map()
    };
  }

  let toxicCount = 0;
  const toxicTokens = new Map(); // word -> severity

  tokens.forEach((word) => {
    if (!word || WHITELIST.has(word)) return;
    if (dictionaryMap.has(word)) {
      const severity = dictionaryMap.get(word) || "medium";
      toxicCount += 1;
      toxicTokens.set(word, severity);
    }
  });

  const percent = Math.round((toxicCount / tokens.length) * 100);

  return {
      totalWords: tokens.length,
      toxicCount,
      percent,
      toxicTokens
  };
}

// Render hasil ke UI
function renderUI(result) {
  const { totalWords, toxicCount, percent, toxicTokens, rawText } = result;

  const statusLabel = document.getElementById("statusLabel");
  const scoreBadge = document.getElementById("scoreBadge");
  const totalWordsEl = document.getElementById("totalWords");
  const toxicWordsEl = document.getElementById("toxicWords");
  const toxicPercentEl = document.getElementById("toxicPercent");
  const highlightedTextEl = document.getElementById("highlightedText");

  totalWordsEl.textContent = totalWords;
  toxicWordsEl.textContent = toxicCount;
  toxicPercentEl.textContent = `${percent}%`;
  scoreBadge.textContent = `${percent}%`;

  scoreBadge.className = "score-badge"; // reset
  if (percent < 20) {
    statusLabel.textContent = "🟢 Aman / Positif";
    scoreBadge.classList.add("success");
  } else if (percent < 50) {
    statusLabel.textContent = "🟡 Cukup Toxic / Negatif";
    scoreBadge.classList.add("warning");
  } else {
    statusLabel.textContent = "🔴 Sangat Toxic / Berbahaya";
    scoreBadge.classList.add("danger");
  }
  if (totalWords === 0) {
    statusLabel.textContent = "Menunggu input...";
    scoreBadge.classList.add("muted");
  }

  // Highlight kata toxic pada teks asli (case-insensitive)
  const words = rawText.split(/(\s+)/); // pertahankan spasi
  const highlighted = words
    .map((part) => {
      const plain = part.toLowerCase().replace(/[^a-z0-9\u00C0-\u024f\u1E00-\u1EFF]/g, "");
      if (plain && toxicTokens.has(plain)) {
        const sev = toxicTokens.get(plain) || "medium";
        return `<span class="highlight-${sev}" title="Kata toxic (${sev})">${part}</span>`;
      }
      return part;
    })
    .join("");

  highlightedTextEl.innerHTML = rawText ? highlighted : "Teks akan muncul di sini.";
}

function saveHistory(entry) {
  const history = loadHistory();
  const newEntry = {
    ...entry,
    savedAt: new Date().toISOString()
  };
  history.unshift(newEntry);
  const trimmed = history.slice(0, 10);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(trimmed));
  renderHistory();
}

function loadHistory() {
  const raw = localStorage.getItem(HISTORY_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) || [];
  } catch {
    return [];
  }
}

function renderHistory() {
  const historyList = document.getElementById("historyList");
  const history = loadHistory();
  if (!history.length) {
    historyList.textContent = "Belum ada riwayat.";
    return;
  }
  historyList.innerHTML = history
    .map((item) => {
      const textPreview = item.rawText.length > 80 ? `${item.rawText.slice(0, 80)}…` : item.rawText || "-";
      return `
        <div class="history-item">
          <div class="history-meta">
            <strong>${item.statusLabel}</strong>
            <span class="history-text">${textPreview}</span>
            <span class="history-text">${item.toxicCount} toxic / ${item.totalWords} kata • ${item.percent}%</span>
          </div>
          <div class="score-badge ${item.badgeClass}">${item.percent}%</div>
        </div>
      `;
    })
    .join("");
}

function exportHistory() {
  const history = loadHistory();
  const blob = new Blob([JSON.stringify(history, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "toxic-history.json";
  a.click();
  URL.revokeObjectURL(url);
}

// Event binding dan alur utama
async function main() {
  await loadDictionary();

  const textarea = document.getElementById("comment");
  const analyzeBtn = document.getElementById("analyzeBtn");
  const chips = document.querySelectorAll(".chip");
  const clearTextBtn = document.getElementById("clearText");
  const clearHistoryBtn = document.getElementById("clearHistory");
  const exportBtn = document.getElementById("exportJson");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const key = chip.dataset.sample;
      textarea.value = SAMPLE_TEXTS[key] || "";
    });
  });

  clearTextBtn.addEventListener("click", () => {
    textarea.value = "";
  });

  analyzeBtn.addEventListener("click", async () => {
    const text = textarea.value.trim();
    analyzeBtn.classList.add("loading");
    analyzeBtn.disabled = true;

    // Delay buatan agar terasa sedang memproses
    await new Promise((resolve) => setTimeout(resolve, 500));

    const tokens = preprocessText(text);
    const detection = detectToxic(tokens);

    renderUI({
      ...detection,
      rawText: text
    });

    const badgeClass = detection.percent < 20 ? "success" : detection.percent < 50 ? "warning" : "danger";
    const statusLabel = detection.percent < 20 ? "Aman / Positif" : detection.percent < 50 ? "Cukup Toxic" : "Sangat Toxic";
    saveHistory({
      ...detection,
      rawText: text,
      badgeClass,
      statusLabel
    });

    analyzeBtn.classList.remove("loading");
    analyzeBtn.disabled = false;
  });

  clearHistoryBtn.addEventListener("click", () => {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  });

  exportBtn.addEventListener("click", exportHistory);

  renderHistory();
}

document.addEventListener("DOMContentLoaded", main);