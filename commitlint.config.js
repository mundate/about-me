// Commit format: type(optional-scope): description
//
// Allowed types (from @commitlint/config-conventional):
//   feat      A new feature
//   fix       A bug fix
//   docs      Documentation only changes
//   style     Formatting changes that don't affect meaning (whitespace, semicolons, etc.)
//   refactor  A code change that neither fixes a bug nor adds a feature
//   perf      A code change that improves performance
//   test      Adding or correcting tests
//   build     Changes to the build system or dependencies (vite, npm)
//   ci        Changes to CI configuration and scripts
//   chore     Other changes that don't modify src or test files
//   revert    Reverts a previous commit
//
// Examples:
//   feat: add projects section
//   fix(nav): close menu on link click
export default {
  extends: ['@commitlint/config-conventional'],
}
