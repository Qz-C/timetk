import Realm from 'realm';

const TaskSchema: any = {
	name: 'Task',
	properties: {
		id: 'int',
		title: 'string',
		category: 'int',
		subCatrgoryId: 'int',
		completed: 'bool',
		time: 'int',
		onGoing: 'bool',
		date: 'date',
		remaningTime: 'int'
	}
};

let realm: any = undefined;
Realm.open({ schema: [TaskSchema] })
	.then(response => realm = response);

module.exports = {
	create(title: string,
		category: number,
		subCatrgoryId: number,
		completed: boolean,
		time: number,
		onGoing: boolean,
		date: string) {
		realm.write(() => {
			const Task = realm.create(TaskSchema.name, {
				id: realm.objects(TaskSchema.name).length + 1,
				title: title,
				category: category,
				subCatrgoryId: subCatrgoryId,
				completed: completed,
				time: time,
				onGoing: onGoing,
				date: date
			})
		})
	},
	close() {
		realm.close();
	}
}