(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "emptyState": "page-module__YnyroG__emptyState",
  "grid": "page-module__YnyroG__grid",
  "page": "page-module__YnyroG__page",
  "resetBtn": "page-module__YnyroG__resetBtn",
});
}),
"[project]/apps/web/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/FilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/JobCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ReportModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$jobs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/data/jobs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/page.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function HomePage() {
    _s();
    const [jobs, setJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$data$2f$jobs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_JOBS"]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedRole, setSelectedRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ALL');
    const [selectedLocation, setSelectedLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ALL');
    const [showBookmarkedOnly, setShowBookmarkedOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bookmarkedIds, setBookmarkedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [reportingJob, setReportingJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load bookmarks from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            try {
                const saved = localStorage.getItem('jobberscrape_bookmarks');
                if (saved) {
                    setBookmarkedIds(JSON.parse(saved));
                }
            } catch (e) {
                console.error('Failed to load bookmarks', e);
            }
        }
    }["HomePage.useEffect"], []);
    // Save bookmarks to localStorage
    const handleToggleBookmark = (id)=>{
        setBookmarkedIds((prev)=>{
            const next = prev.includes(id) ? prev.filter((item)=>item !== id) : [
                ...prev,
                id
            ];
            try {
                localStorage.setItem('jobberscrape_bookmarks', JSON.stringify(next));
            } catch (e) {
                console.error('Failed to save bookmark', e);
            }
            return next;
        });
    };
    const handleReportScam = (jobId, reason)=>{
        console.log(`Report logged for Job ${jobId}: ${reason}`);
        // Update local report count
        setJobs((prev)=>prev.map((job)=>job.id === jobId ? {
                    ...job,
                    reportCount: job.reportCount + 1
                } : job));
    };
    // Instant Client-Side Filter
    const filteredJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[filteredJobs]": ()=>{
            return jobs.filter({
                "HomePage.useMemo[filteredJobs]": (job)=>{
                    // 1. Verification filter (only show verified/caution, exclude rejected)
                    if (job.verificationStatus === 'REJECTED') return false;
                    // 2. Search query filter
                    if (searchQuery.trim()) {
                        const q = searchQuery.toLowerCase();
                        const matchesTitle = job.title.toLowerCase().includes(q);
                        const matchesCompany = job.companyName.toLowerCase().includes(q);
                        const matchesDesc = job.description.toLowerCase().includes(q);
                        if (!matchesTitle && !matchesCompany && !matchesDesc) return false;
                    }
                    // 3. Role filter
                    if (selectedRole !== 'ALL' && job.roleType !== selectedRole) {
                        return false;
                    }
                    // 4. Location filter
                    if (selectedLocation !== 'ALL' && !job.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
                        return false;
                    }
                    // 5. Bookmarks filter
                    if (showBookmarkedOnly && !bookmarkedIds.includes(job.id)) {
                        return false;
                    }
                    return true;
                }
            }["HomePage.useMemo[filteredJobs]"]);
        }
    }["HomePage.useMemo[filteredJobs]"], [
        jobs,
        searchQuery,
        selectedRole,
        selectedLocation,
        showBookmarkedOnly,
        bookmarkedIds
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterBar"], {
                        searchQuery: searchQuery,
                        onSearchChange: setSearchQuery,
                        selectedRole: selectedRole,
                        onRoleChange: setSelectedRole,
                        selectedLocation: selectedLocation,
                        onLocationChange: setSelectedLocation,
                        showBookmarkedOnly: showBookmarkedOnly,
                        onToggleBookmarkedOnly: ()=>setShowBookmarkedOnly(!showBookmarkedOnly),
                        totalResults: filteredJobs.length
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    filteredJobs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].emptyState,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "No Verified Opportunities Found"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Try adjusting your search query or filters to discover active entry-level roles."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSearchQuery('');
                                    setSelectedRole('ALL');
                                    setSelectedLocation('ALL');
                                    setShowBookmarkedOnly(false);
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resetBtn,
                                children: "Reset Filters"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                        children: filteredJobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JobCard"], {
                                job: job,
                                isBookmarked: bookmarkedIds.includes(job.id),
                                onToggleBookmark: handleToggleBookmark,
                                onReportClick: (j)=>setReportingJob(j)
                            }, job.id, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReportModal"], {
                job: reportingJob,
                onClose: ()=>setReportingJob(null),
                onSubmitReport: handleReportScam
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/page.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(HomePage, "bcBu9t1HctIy2p9n9841TGTzJQg=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/FilterBar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "filterLabel": "FilterBar-module__SFDFxa__filterLabel",
  "filterPill": "FilterBar-module__SFDFxa__filterPill",
  "filterWrapper": "FilterBar-module__SFDFxa__filterWrapper",
  "pillActive": "FilterBar-module__SFDFxa__pillActive",
  "pillGroup": "FilterBar-module__SFDFxa__pillGroup",
  "pillsRow": "FilterBar-module__SFDFxa__pillsRow",
  "resultsCount": "FilterBar-module__SFDFxa__resultsCount",
  "savedToggle": "FilterBar-module__SFDFxa__savedToggle",
  "savedToggleActive": "FilterBar-module__SFDFxa__savedToggleActive",
  "searchBox": "FilterBar-module__SFDFxa__searchBox",
  "searchIcon": "FilterBar-module__SFDFxa__searchIcon",
  "searchInput": "FilterBar-module__SFDFxa__searchInput",
  "searchRow": "FilterBar-module__SFDFxa__searchRow",
});
}),
"[project]/apps/web/src/components/FilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterBar",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/FilterBar.module.css [app-client] (css module)");
;
;
;
const FilterBar = ({ searchQuery, onSearchChange, selectedRole, onRoleChange, selectedLocation, onLocationChange, showBookmarkedOnly, onToggleBookmarkedOnly, totalResults })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchBox,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                size: 18,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchIcon
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search verified role, skill, or employer...",
                                value: searchQuery,
                                onChange: (e)=>onSearchChange(e.target.value),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchInput
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggleBookmarkedOnly,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].savedToggle} ${showBookmarkedOnly ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].savedToggleActive : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                size: 16,
                                fill: showBookmarkedOnly ? "currentColor" : "none"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Saved Jobs"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillsRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterLabel,
                                children: "Role:"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                'ALL',
                                'TECH',
                                'OPS',
                                'FINANCE',
                                'NYSC_TRAINEE'
                            ].map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onRoleChange(role),
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterPill} ${selectedRole === role ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillActive : ''}`,
                                    children: role === 'ALL' ? 'All Roles' : role.replace('_', ' ')
                                }, role, false, {
                                    fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterLabel,
                                children: "Location:"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            [
                                'ALL',
                                'Lagos',
                                'Abuja',
                                'Remote'
                            ].map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onLocationChange(loc),
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterPill} ${selectedLocation === loc ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pillActive : ''}`,
                                    children: loc === 'ALL' ? 'All Locations' : loc
                                }, loc, false, {
                                    fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].resultsCount,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                totalResults,
                                " Verified Jobs"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/FilterBar.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/FilterBar.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FilterBar;
var _c;
__turbopack_context__.k.register(_c, "FilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/Header.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "Header-module__MytmHG__actions",
  "brand": "Header-module__MytmHG__brand",
  "header": "Header-module__MytmHG__header",
  "hireLink": "Header-module__MytmHG__hireLink",
  "logoAccent": "Header-module__MytmHG__logoAccent",
  "logoBadge": "Header-module__MytmHG__logoBadge",
  "logoIcon": "Header-module__MytmHG__logoIcon",
  "logoText": "Header-module__MytmHG__logoText",
  "metricsItem": "Header-module__MytmHG__metricsItem",
  "navRow": "Header-module__MytmHG__navRow",
  "pulseDot": "Header-module__MytmHG__pulseDot",
  "tagline": "Header-module__MytmHG__tagline",
  "telegramButton": "Header-module__MytmHG__telegramButton",
  "trustBanner": "Header-module__MytmHG__trustBanner",
  "trustIcon": "Header-module__MytmHG__trustIcon",
  "trustItem": "Header-module__MytmHG__trustItem",
});
}),
"[project]/apps/web/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/Header.module.css [app-client] (css module)");
;
;
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navRow,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoBadge,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoIcon,
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/Header.tsx",
                                        lineNumber: 12,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/Header.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoText,
                                            children: [
                                                "Jobber",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoAccent,
                                                    children: "scrape"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/components/Header.tsx",
                                                    lineNumber: 15,
                                                    columnNumber: 53
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/components/Header.tsx",
                                            lineNumber: 15,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tagline,
                                            children: "Nigeria's High-Trust Entry-Level & NYSC Feed"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Header.tsx",
                                            lineNumber: 16,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/Header.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/Header.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://t.me/jobberscrape",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].telegramButton,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Header.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Join Telegram (8:00 AM Drops)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Header.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/Header.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/hire",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hireLink,
                                    children: "Post a Job (₦20,000)"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/Header.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/Header.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/Header.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustBanner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 18,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustIcon
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/Header.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Anti-Scam SLA:"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/Header.tsx",
                                            lineNumber: 38,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " 0 fee-charging or MLM posts pass our automated pipeline."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/Header.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/Header.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metricsItem,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pulseDot
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/Header.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Live Daily Verified Updates"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/Header.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/Header.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/Header.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/Header.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/Header.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/JobCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "applyButton": "JobCard-module__IGhrxW__applyButton",
  "auditDetails": "JobCard-module__IGhrxW__auditDetails",
  "badgeFinance": "JobCard-module__IGhrxW__badgeFinance",
  "badgeNysc": "JobCard-module__IGhrxW__badgeNysc",
  "badgeOps": "JobCard-module__IGhrxW__badgeOps",
  "badgeTech": "JobCard-module__IGhrxW__badgeTech",
  "bookmarkBtn": "JobCard-module__IGhrxW__bookmarkBtn",
  "bookmarked": "JobCard-module__IGhrxW__bookmarked",
  "card": "JobCard-module__IGhrxW__card",
  "cardFooter": "JobCard-module__IGhrxW__cardFooter",
  "cardHeader": "JobCard-module__IGhrxW__cardHeader",
  "companyName": "JobCard-module__IGhrxW__companyName",
  "companyRow": "JobCard-module__IGhrxW__companyRow",
  "description": "JobCard-module__IGhrxW__description",
  "featuredCard": "JobCard-module__IGhrxW__featuredCard",
  "featuredRibbon": "JobCard-module__IGhrxW__featuredRibbon",
  "jobTitle": "JobCard-module__IGhrxW__jobTitle",
  "metaPill": "JobCard-module__IGhrxW__metaPill",
  "metaPills": "JobCard-module__IGhrxW__metaPills",
  "metaRow": "JobCard-module__IGhrxW__metaRow",
  "reportLink": "JobCard-module__IGhrxW__reportLink",
  "verifiedIcon": "JobCard-module__IGhrxW__verifiedIcon",
  "verifiedPill": "JobCard-module__IGhrxW__verifiedPill",
});
}),
"[project]/apps/web/src/components/JobCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobCard",
    ()=>JobCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/JobCard.module.css [app-client] (css module)");
;
;
;
const JobCard = ({ job, isBookmarked, onToggleBookmark, onReportClick })=>{
    const getRoleBadgeClass = (role)=>{
        switch(role){
            case 'TECH':
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeTech;
            case 'OPS':
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeOps;
            case 'FINANCE':
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeFinance;
            case 'NYSC_TRAINEE':
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeNysc;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badgeOther;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${job.isFeatured ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuredCard : ''}`,
        children: [
            job.isFeatured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuredRibbon,
                children: "★ FEATURED DROP"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].companyRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].companyName,
                                        children: job.companyName
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verifiedPill,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                size: 14,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].verifiedIcon
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                                lineNumber: 50,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Verified Clean"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].jobTitle,
                                children: job.title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/JobCard.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onToggleBookmark(job.id),
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookmarkBtn} ${isBookmarked ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookmarked : ''}`,
                        "aria-label": isBookmarked ? "Remove bookmark" : "Save job",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                            size: 18,
                            fill: isBookmarked ? "currentColor" : "none"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/JobCard.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/JobCard.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                children: job.description
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaPills,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaPill,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    job.location
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaPill} ${getRoleBadgeClass(job.roleType)}`,
                                children: job.roleType.replace('_', ' ')
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].metaPill,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    job.minExperienceYears,
                                    "-",
                                    job.maxExperienceYears,
                                    " yrs exp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/JobCard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    job.verifiedBadgeDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].auditDetails,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: [
                                "🛡️ ",
                                job.verifiedBadgeDetails
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/JobCard.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/JobCard.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardFooter,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onReportClick(job),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reportLink,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Report Scam / Fee"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/JobCard.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: job.applyUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$JobCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].applyButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Apply Directly"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/JobCard.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/JobCard.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/JobCard.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = JobCard;
var _c;
__turbopack_context__.k.register(_c, "JobCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/ReportModal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "ReportModal-module__DOvafG__actions",
  "alertIcon": "ReportModal-module__DOvafG__alertIcon",
  "cancelBtn": "ReportModal-module__DOvafG__cancelBtn",
  "checkIcon": "ReportModal-module__DOvafG__checkIcon",
  "closeBtn": "ReportModal-module__DOvafG__closeBtn",
  "field": "ReportModal-module__DOvafG__field",
  "form": "ReportModal-module__DOvafG__form",
  "jobBrief": "ReportModal-module__DOvafG__jobBrief",
  "modalContent": "ReportModal-module__DOvafG__modalContent",
  "modalEnter": "ReportModal-module__DOvafG__modalEnter",
  "modalHeader": "ReportModal-module__DOvafG__modalHeader",
  "modalOverlay": "ReportModal-module__DOvafG__modalOverlay",
  "select": "ReportModal-module__DOvafG__select",
  "submitBtn": "ReportModal-module__DOvafG__submitBtn",
  "successState": "ReportModal-module__DOvafG__successState",
  "textarea": "ReportModal-module__DOvafG__textarea",
  "titleGroup": "ReportModal-module__DOvafG__titleGroup",
});
}),
"[project]/apps/web/src/components/ReportModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportModal",
    ()=>ReportModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ReportModal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ReportModal = ({ job, onClose, onSubmitReport })=>{
    _s();
    const [reason, setReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('FEE_SOLICITATION');
    const [details, setDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!job) return null;
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmitReport(job.id, `${reason}: ${details}`);
        setSubmitted(true);
        setTimeout(()=>{
            setSubmitted(false);
            onClose();
        }, 1800);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalOverlay,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalContent,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleGroup,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alertIcon,
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Report Fraud / Scam Listing"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successState,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkIcon,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            children: "Report Logged"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Thank you for protecting Nigerian jobseekers. If 3 distinct reports are verified, this post will be automatically suspended."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].jobBrief,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: job.title
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                " at ",
                                job.companyName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Reason for Flagging:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: reason,
                                    onChange: (e)=>setReason(e.target.value),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "FEE_SOLICITATION",
                                            children: "Asking for Application/Screening Fee"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "MLM_BRIEFING",
                                            children: "GNLD / MLM Briefing Trap"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "IMPERSONATION",
                                            children: "Fake Corporate Brand Impersonation"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "EXPERIENCE_MISMATCH",
                                            children: "Requires 3+ years (Not Entry-Level)"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "OTHER",
                                            children: "Other Suspicious Behavior"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Additional Evidence (Optional):"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "e.g., They sent a WhatsApp invite demanding N2,000 for training...",
                                    value: details,
                                    onChange: (e)=>setDetails(e.target.value),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelBtn,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ReportModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitBtn,
                                    children: "Submit 1-Tap Report"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/ReportModal.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/ReportModal.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/ReportModal.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ReportModal, "w1NFoMP8R+kcltXj2sQABmymFaI=");
_c = ReportModal;
var _c;
__turbopack_context__.k.register(_c, "ReportModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/data/jobs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_JOBS",
    ()=>INITIAL_JOBS
]);
const INITIAL_JOBS = [
    {
        id: "f80b1c9d-8351-41d9-8139-444a9540b101",
        title: "Junior Operations Associate",
        companyName: "Paystack",
        location: "Lagos",
        roleType: "OPS",
        description: "We are seeking a detail-oriented Junior Operations Associate to support payment reconciliation, merchant escalations, and settlement audits. Ideal for graduates with analytical skills.",
        applyUrl: "https://paystack.com/careers/junior-ops",
        contactEmail: "careers@paystack.com",
        minExperienceYears: 0,
        maxExperienceYears: 1,
        verificationStatus: "VERIFIED",
        scamRiskScore: 0,
        reportCount: 0,
        isFeatured: true,
        createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
        verifiedBadgeDetails: "Tier-1 Domain & Official Careers Portal Verified"
    },
    {
        id: "f80b1c9d-8351-41d9-8139-444a9540b102",
        title: "Graduate Trainee Programme 2026",
        companyName: "Stanbic IBTC",
        location: "Abuja",
        roleType: "FINANCE",
        description: "Stanbic IBTC Graduate Trainee Programme invites passionate Nigerian fresh graduates and NYSC corps members for an intensive 12-month development track in corporate and investment banking.",
        applyUrl: "https://stanbicibtc.com/graduates",
        contactEmail: "recruitment@stanbicibtc.com",
        minExperienceYears: 0,
        maxExperienceYears: 1,
        verificationStatus: "VERIFIED",
        scamRiskScore: 0,
        reportCount: 0,
        isFeatured: true,
        createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
        verifiedBadgeDetails: "Official Corporate Career Pipeline"
    },
    {
        id: "f80b1c9d-8351-41d9-8139-444a9540b103",
        title: "Junior Frontend Engineer (NYSC / Entry)",
        companyName: "Kuda Microfinance Bank",
        location: "Remote",
        roleType: "TECH",
        description: "Join our client web engineering guild. Seeking energetic graduates with foundational understanding of TypeScript, React, and responsive layouts. NYSC corps members welcome.",
        applyUrl: "https://kuda.com/careers/junior-fe",
        contactEmail: "careers@kuda.com",
        minExperienceYears: 0,
        maxExperienceYears: 1,
        verificationStatus: "VERIFIED",
        scamRiskScore: 0,
        reportCount: 0,
        isFeatured: false,
        createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
        verifiedBadgeDetails: "Validated Remote Fintech Employer"
    },
    {
        id: "f80b1c9d-8351-41d9-8139-444a9540b104",
        title: "Associate Product Analyst",
        companyName: "Moniepoint",
        location: "Lagos",
        roleType: "TECH",
        description: "Work directly with Senior Product Managers to analyze user behavior data across POS and merchant digital products. Requires SQL and spreadsheet fundamentals.",
        applyUrl: "https://moniepoint.com/careers/product-analyst",
        contactEmail: "talent@moniepoint.com",
        minExperienceYears: 0,
        maxExperienceYears: 2,
        verificationStatus: "VERIFIED",
        scamRiskScore: 0,
        reportCount: 0,
        isFeatured: false,
        createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
        verifiedBadgeDetails: "Direct Recruiter Verified"
    },
    {
        id: "f80b1c9d-8351-41d9-8139-444a9540b105",
        title: "NYSC Legal & Compliance Intern",
        companyName: "Interswitch Group",
        location: "Lagos",
        roleType: "NYSC_TRAINEE",
        description: "Calling currently serving NYSC corps members with LL.B / BL qualification looking for Primary Place of Assignment (PPA) in fintech regulatory compliance.",
        applyUrl: "https://interswitchgroup.com/careers",
        contactEmail: "careers@interswitchgroup.com",
        minExperienceYears: 0,
        maxExperienceYears: 0,
        verificationStatus: "VERIFIED",
        scamRiskScore: 0,
        reportCount: 0,
        isFeatured: false,
        createdAt: new Date(Date.now() - 3600000 * 30).toISOString(),
        verifiedBadgeDetails: "Accredited NYSC PPA Employer"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_0xi53or._.js.map