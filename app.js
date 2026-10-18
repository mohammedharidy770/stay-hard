const STORAGE_KEY = 'stay-hard-data-v1';
const MODAL_ID = 'settings-modal';
const TASK_MODAL_ID = 'task-modal';
const DAY_NAMES = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const DAY_KEYS = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

const defaultData = {
  version: 1,
  profile: {
    studentName: 'M. HARIDY',
    school: 'AL-AZHAR',
    track: 'Scientific Track',
    year: '2026 - 2027',
    nuvioUrl: 'https://mohammedharidy770.github.io/Nuvio/'
  },
  subjects: [
    { id: 'physics', name: 'Physics', category: 'Science', active: true },
    { id: 'chemistry', name: 'Chemistry', category: 'Science', active: true },
    { id: 'biology', name: 'Biology', category: 'Science', active: true },
    { id: 'english', name: 'English', category: 'Science', active: true },
    { id: 'calculus', name: 'Calculus', category: 'Science', active: true },
    { id: 'dynamics-statics', name: 'Dynamics + Statics', category: 'Science', active: true },
    { id: 'nahw', name: 'Nahw', category: 'Arabic', active: true },
    { id: 'sarf', name: 'Sarf', category: 'Arabic', active: true },
    { id: 'balagha', name: 'Balagha', category: 'Arabic', active: true },
    { id: 'adab-texts', name: 'Adab + Texts', category: 'Arabic', active: true },
    { id: 'tafsir', name: 'Tafsir', category: 'Religion', active: true },
    { id: 'hadith', name: 'Hadith', category: 'Religion', active: true },
    { id: 'tawhid', name: 'Tawhid', category: 'Religion', active: true },
    { id: 'fiqh', name: 'Fiqh', category: 'Religion', active: true },
    { id: 'geology', name: 'Geology', category: 'Science', active: false, temporary: true }
  ],
  routine: [
    'Study Block 2h',
    'Short Break 15min',
    'Long Break 45min',
    'Empty Mind 10min',
    'Nap (if needed)'
  ],
  goals: [
    { id: 'g1', text: 'Study consistently.', done: false },
    { id: 'g2', text: 'Finish your assignments.', done: false },
    { id: 'g3', text: 'Review what you learned.', done: false },
    { id: 'g4', text: 'Avoid distractions.', done: false },
    { id: 'g5', text: 'Keep moving forward.', done: false }
  ],
  tasks: [
    { id: 't-sat-1', day: 'saturday', title: 'Physics', subjectId: 'physics', estimate: '2h', note: 'Problems + revision', status: 'Not Started', completedNote: '', order: 1 },
    { id: 't-sat-2', day: 'saturday', title: 'Nahw', subjectId: 'nahw', estimate: '1.5h', note: 'Rules + exercises', status: 'In Progress', completedNote: '', order: 2 },
    { id: 't-sat-3', day: 'saturday', title: 'Tafsir', subjectId: 'tafsir', estimate: '1h', note: 'Study + notes', status: 'Completed', completedNote: 'Reviewed chapter notes', order: 3 },
    { id: 't-sun-1', day: 'sunday', title: 'Chemistry', subjectId: 'chemistry', estimate: '12:30', note: 'Lesson + review', status: 'Not Started', completedNote: '', order: 1 },
    { id: 't-sun-2', day: 'sunday', title: 'English', subjectId: 'english', estimate: '18:00', note: 'Lesson + practice', status: 'Completed', completedNote: 'Completed lesson summary', order: 2 },
    { id: 't-mon-1', day: 'monday', title: 'Geology', subjectId: 'geology', estimate: 'Platform', note: 'Catch-up lesson', status: 'In Progress', completedNote: '', order: 1 },
    { id: 't-mon-2', day: 'monday', title: 'Calculus', subjectId: 'calculus', estimate: '2h', note: 'Theory + exercises', status: 'Not Started', completedNote: '', order: 2 },
    { id: 't-mon-3', day: 'monday', title: 'Nahw', subjectId: 'nahw', estimate: '1.5h', note: 'Practice + review', status: 'Not Started', completedNote: '', order: 3 },
    { id: 't-tue-1', day: 'tuesday', title: 'Biology', subjectId: 'biology', estimate: '2h', note: 'Concepts + practice', status: 'Not Started', completedNote: '', order: 1 },
    { id: 't-tue-2', day: 'tuesday', title: 'Dynamics + Statics', subjectId: 'dynamics-statics', estimate: '2h', note: 'Problem solving', status: 'Deferred', completedNote: '', order: 2 },
    { id: 't-tue-3', day: 'tuesday', title: 'Tawhid', subjectId: 'tawhid', estimate: '1.5h', note: 'Study + notes', status: 'Not Started', completedNote: '', order: 3 },
    { id: 't-wed-1', day: 'wednesday', title: 'Physics', subjectId: 'physics', estimate: '2h', note: 'Concepts + practice', status: 'Not Started', completedNote: '', order: 1 },
    { id: 't-wed-2', day: 'wednesday', title: 'Chemistry', subjectId: 'chemistry', estimate: '2h', note: 'Problems + revision', status: 'In Progress', completedNote: '', order: 2 },
    { id: 't-wed-3', day: 'wednesday', title: 'Balagha', subjectId: 'balagha', estimate: '1.5h', note: 'Rules + exercises', status: 'Not Started', completedNote: '', order: 3 },
    { id: 't-thu-1', day: 'thursday', title: 'Biology', subjectId: 'biology', estimate: 'Platform', note: 'Lesson + review', status: 'Not Started', completedNote: '', order: 1 },
    { id: 't-thu-2', day: 'thursday', title: 'English', subjectId: 'english', estimate: '2h', note: 'Lesson + practice', status: 'Deferred', completedNote: '', order: 2 },
    { id: 't-thu-3', day: 'thursday', title: 'Adab + Texts', subjectId: 'adab-texts', estimate: '1.5h', note: 'Reading + notes', status: 'Not Started', completedNote: '', order: 3 },
    { id: 't-fri-1', day: 'friday', title: 'Fiqh', subjectId: 'fiqh', estimate: '1h', note: 'Study + notes', status: 'Completed', completedNote: 'Reviewed summary', order: 1 },
    { id: 't-fri-2', day: 'friday', title: 'Hadith', subjectId: 'hadith', estimate: '1h', note: 'Study + notes', status: 'Not Started', completedNote: '', order: 2 },
    { id: 't-fri-3', day: 'friday', title: 'Review / Weak Subjects', subjectId: 'dynamics-statics', estimate: '2h', note: 'Summary + exercises', status: 'Not Started', completedNote: '', order: 3 }
  ]
};

const state = {
  data: loadData(),
  activeTaskId: null,
  lastDragTaskId: null
};

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return JSON.parse(JSON.stringify(defaultData));
    }
    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.tasks)) {
      throw new Error('Invalid stored data');
    }
    return parsed;
  } catch (error) {
    console.warn('Falling back to default data:', error);
    return JSON.parse(JSON.stringify(defaultData));
  }
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
    renderHeaderCounts();
    renderGoals();
    renderSubjectsOverview();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function ensureExpandedProfile(data) {
  data.profile = { ...defaultData.profile, ...(data.profile || {}) };
  data.subjects = Array.isArray(data.subjects) && data.subjects.length ? data.subjects : defaultData.subjects;
  data.goals = Array.isArray(data.goals) ? data.goals : defaultData.goals;
  data.routine = Array.isArray(data.routine) && data.routine.length ? data.routine : defaultData.routine;
  data.tasks = Array.isArray(data.tasks) ? data.tasks : defaultData.tasks;
}

function renderWeek() {
  const root = document.getElementById('week-grid');
  if (!root) return;

  root.innerHTML = '';

  DAY_KEYS.forEach((dayKey, index) => {
    const dayTasks = state.data.tasks
      .filter(task => task.day === dayKey)
      .sort((a, b) => Number(a.order || 0) - Number(b.order || 0));

    const card = document.createElement('article');
    card.className = 'day-card';
    card.dataset.day = dayKey;
    card.draggable = false;

    card.innerHTML = `
      <div class="day-header">
        <div class="day-title">
          <span class="day-number">0${index + 1}</span>
          <span class="day-name">${DAY_NAMES[index]}</span>
        </div>
        <span class="day-tag" data-tone="${getDayTone(dayKey)}">${getDayTag(dayKey)}</span>
      </div>
      <div class="subject-list">
        ${dayTasks.length ? dayTasks.map(renderTaskRow).join('') : '<div class="day-note">// no task added yet.</div>'}
      </div>
      <div class="day-footer">
        <button class="add-task-btn" data-action="add-task" data-day="${dayKey}">+ TASK</button>
        <button class="inline-btn" data-action="move-day" data-day="${dayKey}">Move</button>
      </div>
    `;

    root.appendChild(card);
  });

  attachTaskEventHandlers();
}

function renderTaskRow(task) {
  const subject = state.data.subjects.find(item => item.id === task.subjectId) || { name: 'General' };
  return `
    <div class="task-row" data-task-id="${task.id}" draggable="true" data-day="${task.day}">
      <div class="drag-handle" aria-label="Drag to reorder">⋮⋮</div>
      <div class="task-main">
        <div class="task-head">
          <div class="task-title">${escapeHtml(task.title)}</div>
          <select class="task-status" data-role="status" data-task-id="${task.id}" aria-label="Task status">
            ${['Not Started', 'In Progress', 'Completed', 'Deferred', 'Excluded']
              .map(status => `<option value="${status}" ${status === task.status ? 'selected' : ''}>${status}</option>`)
              .join('')}
          </select>
        </div>
        <div class="task-meta">
          <span>${subject.name}</span>
          <span>•</span>
          <span>${task.estimate}</span>
          ${task.completedNote ? `<span>•</span><span>${escapeHtml(task.completedNote)}</span>` : ''}
        </div>
      </div>
      <div class="task-actions">
        <button data-role="edit" data-task-id="${task.id}">Edit</button>
        <button data-role="delete" data-task-id="${task.id}">Delete</button>
      </div>
    </div>
  `;
}

function getDayTone(dayKey) {
  if (dayKey === 'monday') return 'focus';
  if (['sunday', 'thursday'].includes(dayKey)) return 'lessons';
  if (dayKey === 'friday') return 'review';
  return 'open';
}

function getDayTag(dayKey) {
  if (dayKey === 'monday') return 'focus';
  if (['sunday', 'thursday'].includes(dayKey)) return 'lessons';
  if (dayKey === 'friday') return 'review';
  return 'open';
}

function attachTaskEventHandlers() {
  document.querySelectorAll('.task-status').forEach((control) => {
    control.addEventListener('change', (event) => {
      const taskId = event.target.dataset.taskId;
      const task = state.data.tasks.find(item => item.id === taskId);
      if (!task) return;
      task.status = event.target.value;
      saveData();
      renderWeek();
    });
  });

  document.querySelectorAll('[data-role="edit"]').forEach((button) => {
    button.addEventListener('click', () => openTaskEditor(button.dataset.taskId));
  });

  document.querySelectorAll('[data-role="delete"]').forEach((button) => {
    button.addEventListener('click', () => {
      const taskId = button.dataset.taskId;
      const task = state.data.tasks.find(item => item.id === taskId);
      if (!task) return;
      const confirmed = window.confirm(`Delete task: ${task.title}?`);
      if (confirmed) {
        state.data.tasks = state.data.tasks.filter(item => item.id !== taskId);
        saveData();
        renderWeek();
      }
    });
  });

  document.querySelectorAll('[data-action="add-task"]').forEach((button) => {
    button.addEventListener('click', () => openTaskEditor(null, button.dataset.day));
  });

  document.querySelectorAll('[data-action="move-day"]').forEach((button) => {
    button.addEventListener('click', () => moveDayPrompt(button.dataset.day));
  });

  document.querySelectorAll('.task-row').forEach((row) => {
    row.addEventListener('dragstart', (event) => {
      const taskId = row.dataset.taskId;
      state.lastDragTaskId = taskId;
      event.dataTransfer.setData('text/plain', taskId);
      row.classList.add('dragging');
    });

    row.addEventListener('dragend', () => row.classList.remove('dragging'));

    row.addEventListener('dragover', (event) => {
      event.preventDefault();
      const dayCard = row.closest('.day-card');
      if (dayCard) dayCard.classList.add('drag-over');
    });

    row.addEventListener('dragleave', () => {
      const dayCard = row.closest('.day-card');
      if (dayCard) dayCard.classList.remove('drag-over');
    });

    row.addEventListener('drop', (event) => {
      event.preventDefault();
      const targetTaskId = row.dataset.taskId;
      const movedTaskId = event.dataTransfer.getData('text/plain');
      const targetTask = state.data.tasks.find(item => item.id === targetTaskId);
      const draggedTask = state.data.tasks.find(item => item.id === movedTaskId);
      const dayCard = row.closest('.day-card');
      if (dayCard) dayCard.classList.remove('drag-over');
      if (draggedTask && targetTask) {
        const draggedIndex = state.data.tasks.findIndex(item => item.id === draggedTask.id);
        const targetIndex = state.data.tasks.findIndex(item => item.id === targetTask.id);
        const [moved] = state.data.tasks.splice(draggedIndex, 1);
        state.data.tasks.splice(targetIndex, 0, moved);
        state.data.tasks.forEach((task, index) => {
          task.order = index + 1;
        });
        saveData();
        renderWeek();
      }
    });
  });

  document.querySelectorAll('.day-card').forEach((card) => {
    card.addEventListener('dragover', (event) => {
      event.preventDefault();
      card.classList.add('drag-over');
    });

    card.addEventListener('dragleave', () => card.classList.remove('drag-over'));

    card.addEventListener('drop', (event) => {
      event.preventDefault();
      card.classList.remove('drag-over');
      const taskId = event.dataTransfer.getData('text/plain');
      const task = state.data.tasks.find(item => item.id === taskId);
      if (!task) return;
      task.day = card.dataset.day;
      const days = state.data.tasks.filter(item => item.day === task.day && item.id !== task.id);
      task.order = days.length + 1;
      saveData();
      renderWeek();
    });
  });
}

function openTaskEditor(taskId = null, dayKey = null) {
  const modal = document.getElementById(TASK_MODAL_ID);
  const subjectSelect = document.getElementById('task-subject');
  const form = document.getElementById('task-form');
  const task = taskId ? state.data.tasks.find(item => item.id === taskId) : null;

  subjectSelect.innerHTML = state.data.subjects
    .filter(item => item.active !== false)
    .map(subject => `<option value="${subject.id}">${subject.name}</option>`)
    .join('');

  if (task) {
    document.getElementById('task-id').value = task.id;
    document.getElementById('task-day').value = task.day;
    document.getElementById('task-title').value = task.title || '';
    document.getElementById('task-estimate').value = task.estimate || '';
    document.getElementById('task-note').value = task.note || '';
    document.getElementById('task-status-select').value = task.status || 'Not Started';
    document.getElementById('task-completed-note').value = task.completedNote || '';
    subjectSelect.value = task.subjectId || state.data.subjects[0].id;
  } else {
    const finalDay = dayKey || 'monday';
    document.getElementById('task-id').value = '';
    document.getElementById('task-day').value = finalDay;
    document.getElementById('task-title').value = '';
    document.getElementById('task-estimate').value = '1h';
    document.getElementById('task-note').value = '';
    document.getElementById('task-status-select').value = 'Not Started';
    document.getElementById('task-completed-note').value = '';
    subjectSelect.value = state.data.subjects[0].id;
  }

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function saveTaskFromModal() {
  const id = document.getElementById('task-id').value;
  const day = document.getElementById('task-day').value;
  const title = document.getElementById('task-title').value.trim();
  const estimate = document.getElementById('task-estimate').value.trim() || '1h';
  const note = document.getElementById('task-note').value.trim();
  const status = document.getElementById('task-status-select').value || 'Not Started';
  const subjectId = document.getElementById('task-subject').value;
  const completedNote = document.getElementById('task-completed-note').value.trim();

  if (!title) {
    window.alert('Task title is required.');
    return;
  }

  if (id) {
    const existing = state.data.tasks.find(task => task.id === id);
    if (existing) {
      existing.title = title;
      existing.day = day;
      existing.subjectId = subjectId;
      existing.estimate = estimate;
      existing.note = note;
      existing.status = status;
      existing.completedNote = completedNote;
    }
  } else {
    const task = {
      id: crypto.randomUUID(),
      day,
      title,
      subjectId,
      estimate,
      note,
      status,
      completedNote,
      order: state.data.tasks.filter(item => item.day === day).length + 1
    };
    state.data.tasks.push(task);
  }

  saveData();
  renderWeek();
  hideModal(TASK_MODAL_ID);
}

function hideModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }
}

function moveDayPrompt(dayKey) {
  const target = window.prompt('Move selected day to which day? Choose day number 1-7:\n1 Saturday\n2 Sunday\n3 Monday\n4 Tuesday\n5 Wednesday\n6 Thursday\n7 Friday', '1');
  if (!target) return;

  const value = Number(target);
  if (!Number.isInteger(value) || value < 1 || value > 7) {
    window.alert('Please choose a valid day number from 1 to 7.');
    return;
  }

  const nextDay = DAY_KEYS[value - 1];
  state.data.tasks.forEach(task => {
    if (task.day === dayKey) task.day = nextDay;
  });

  saveData();
  renderWeek();
}

function renderHeaderCounts() {
  const activeSubjects = state.data.subjects.filter(subject => subject.active !== false);
  const progressFill = document.getElementById('header-progress-fill');
  const progressValue = document.getElementById('header-progress-value');
  if (progressFill) {
    const completed = state.data.tasks.filter(task => task.status === 'Completed').length;
    const totalCount = Math.max(activeSubjects.length, 1);
    const pct = Math.min((completed / totalCount) * 100, 100);
    progressFill.style.width = `${pct}%`;
    progressValue.textContent = String(completed);
  }
}

function renderSubjectsOverview() {
  const root = document.getElementById('subjects-overview');
  if (!root) return;

  const grouped = {
    Science: state.data.subjects.filter(item => item.category === 'Science' && item.active !== false),
    Arabic: state.data.subjects.filter(item => item.category === 'Arabic' && item.active !== false),
    Religion: state.data.subjects.filter(item => item.category === 'Religion' && item.active !== false)
  };

  root.innerHTML = Object.entries(grouped).map(([category, items]) => {
    const liMarkup = items
      .map(item => `<li><span>${item.name}</span><span>${state.data.tasks.filter(task => task.subjectId === item.id).length}</span></li>`)
      .join('');

    return `
      <div class="subject-group">
        <h3>${category}</h3>
        <ul>${liMarkup}</ul>
      </div>
    `;
  }).join('');
}

function renderGoals() {
  const list = document.getElementById('goals-list');
  const ring = document.getElementById('goal-ring');
  const percentNode = document.getElementById('goal-percent');

  if (!list) return;

  list.innerHTML = state.data.goals.map(goal => `
    <li class="goal-item">
      <label class="goal-text">
        <input type="checkbox" ${goal.done ? 'checked' : ''} data-role="goal-toggle" data-goal-id="${goal.id}" />
        <span class="${goal.done ? 'goal-done' : ''}">${escapeHtml(goal.text)}</span>
      </label>
      <button data-role="goal-delete" data-goal-id="${goal.id}">Delete</button>
    </li>
  `).join('');

  const doneCount = state.data.goals.filter(goal => goal.done).length;
  const percent = state.data.goals.length ? Math.round((doneCount / state.data.goals.length) * 100) : 0;
  if (ring) {
    ring.style.background = `conic-gradient(var(--cyan) ${percent * 3.6}deg, rgba(255,255,255,0.09) 0deg 360deg)`;
  }
  if (percentNode) percentNode.textContent = `${percent}%`;

  list.querySelectorAll('[data-role="goal-toggle"]').forEach(input => {
    input.addEventListener('change', () => {
      const goal = state.data.goals.find(item => item.id === input.dataset.goalId);
      if (!goal) return;
      goal.done = input.checked;
      saveData();
      renderGoals();
    });
  });

  list.querySelectorAll('[data-role="goal-delete"]').forEach(button => {
    button.addEventListener('click', () => {
      const goalId = button.dataset.goalId;
      state.data.goals = state.data.goals.filter(item => item.id !== goalId);
      saveData();
      renderGoals();
    });
  });

  const addGoalButton = document.createElement('button');
  addGoalButton.className = 'inline-btn';
  addGoalButton.type = 'button';
  addGoalButton.textContent = '+ Goal';
  addGoalButton.addEventListener('click', () => {
    const text = window.prompt('New weekly goal:', '');
    if (!text) return;
    state.data.goals.push({ id: crypto.randomUUID(), text, done: false });
    saveData();
    renderGoals();
  });
  list.appendChild(addGoalButton);
}

function renderRoutine() {
  const root = document.getElementById('routine-list');
  if (!root) return;
  root.innerHTML = state.data.routine.map(item => `<li>◈ ${item}</li>`).join('');
}

function bindSettings() {
  const modal = document.getElementById(MODAL_ID);
  const trigger = document.querySelector('[data-target="settings-modal-trigger"]');
  const closeButtons = document.querySelectorAll('[data-close="settings-modal"]');

  if (trigger) {
    trigger.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
      populateSettingsForm();
    });
  }

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.close;
      hideModal(targetId);
    });
  });

  document.getElementById('export-data-btn').addEventListener('click', exportJsonData);
  document.getElementById('import-data-btn').addEventListener('click', () => document.getElementById('import-file-input').click());
  document.getElementById('reset-data-btn').addEventListener('click', resetPlanner);
  document.getElementById('import-file-input').addEventListener('change', importJsonData);
  document.getElementById('task-save').addEventListener('click', saveTaskFromModal);

  document.getElementById('student-name-input').addEventListener('change', () => {
    state.data.profile.studentName = document.getElementById('student-name-input').value;
    saveData();
  });
  document.getElementById('year-input').addEventListener('change', () => {
    state.data.profile.year = document.getElementById('year-input').value;
    saveData();
  });
  document.getElementById('track-input').addEventListener('change', () => {
    state.data.profile.track = document.getElementById('track-input').value;
    saveData();
  });
  document.getElementById('school-input').addEventListener('change', () => {
    state.data.profile.school = document.getElementById('school-input').value;
    saveData();
  });
  document.getElementById('nuvio-url-input').addEventListener('change', () => {
    state.data.profile.nuvioUrl = document.getElementById('nuvio-url-input').value;
    saveData();
    updateNuvioLink();
  });
}

function populateSettingsForm() {
  const profile = state.data.profile;
  document.getElementById('student-name-input').value = profile.studentName || 'M. HARIDY';
  document.getElementById('year-input').value = profile.year || '2026 - 2027';
  document.getElementById('track-input').value = profile.track || 'Scientific Track';
  document.getElementById('school-input').value = profile.school || 'AL-AZHAR';
  document.getElementById('nuvio-url-input').value = profile.nuvioUrl || 'https://mohammedharidy770.github.io/Nuvio/';
}

function exportJsonData() {
  const blob = new Blob([JSON.stringify(state.data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'stay-hard-backup.json';
  link.click();
  URL.revokeObjectURL(url);
}

function importJsonData(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.tasks)) {
        throw new Error('The file is not a valid STAY HARD backup.');
      }
      const shouldReplace = window.confirm('Importing this JSON will replace the current planner. Continue?');
      if (!shouldReplace) return;
      ensureExpandedProfile(parsed);
      state.data = parsed;
      saveData();
      renderAll();
      hideModal(MODAL_ID);
    } catch (error) {
      console.error(error);
      window.alert(error.message || 'Import failed.');
    } finally {
      event.target.value = '';
    }
  };
  reader.readAsText(file);
}

function resetPlanner() {
  const confirmed = window.confirm('This will permanently clear all saved planner data. Continue?');
  if (!confirmed) return;
  state.data = JSON.parse(JSON.stringify(defaultData));
  localStorage.removeItem(STORAGE_KEY);
  saveData();
  renderAll();
  hideModal(MODAL_ID);
}

function updateNuvioLink() {
  const link = document.getElementById('nuvio-link');
  const url = state.data.profile.nuvioUrl || 'https://mohammedharidy770.github.io/Nuvio/';
  link.setAttribute('href', url);
}

function renderAll() {
  renderWeek();
  renderRoutine();
  renderGoals();
  renderSubjectsOverview();
  renderHeaderCounts();
  updateNuvioLink();
  populateSettingsForm();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

(function init() {
  ensureExpandedProfile(state.data);
  bindSettings();
  renderAll();

  document.querySelectorAll('.nav-item').forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.target;
      if (target === 'settings-modal-trigger') {
        return;
      }
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

window.addEventListener('beforeunload', () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
});
