export const getFormData = (formData, data, previousKey) => {
	if (data instanceof Object) {
		Object.keys(data).forEach(key => {
			const value = data[key];
			if (value instanceof Object && !Array.isArray(value)) {
				return getFormData(formData, value, key);
			}
			if (previousKey) {
				key = `${previousKey}[${key}]`;
			}
			if (Array.isArray(value)) {
				value.forEach(val => {
					formData.append(`${key}[]`, val);
				});
			} else {
				formData.append(key, value);
			}
		});
	}
};
